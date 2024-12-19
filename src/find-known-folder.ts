import { execSync } from 'child_process';
import iconv from 'iconv-lite';

let rawRegResultCache:Buffer<ArrayBufferLike>|null = null;
const regResultCache:{[key:string]:string} = {};

export function getUserShellFolders(encoding:string) {
    if (rawRegResultCache == null) {
        const command = 'reg query "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders"';
        rawRegResultCache = execSync(command);
    }
    
    if (regResultCache[encoding] != null) {
        return regResultCache[encoding];
    }
    else {
        const output = iconv.decode(rawRegResultCache, encoding);
        regResultCache[encoding] = output;
        return output;
    }
}

export function findKnownFolders(pattern:RegExp , encoding:string='utf-8'):string|undefined {
    try {
        const output = getUserShellFolders(encoding);
        const match = output.match(pattern);
        if (match && match[1]) {
            const rawPath = match[1].trim();
            
            return rawPath.replace(/%([^%]+)%/g, (_, key) => process.env[key] || '');
        }
    } catch (error) {
        
    }
    return undefined;
}