import { findKnownFolders } from './find-known-folder'; 

export function personal(encoding:string='utf-8') {
    return findKnownFolders(/Personal\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}
export function desktop(encoding:string='utf-8') {
    return findKnownFolders(/Desktop\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}
export function favorites(encoding:string='utf-8') {
    return findKnownFolders(/Favorites\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}
export function localAppdata(encoding:string='utf-8') {
    return findKnownFolders(/Local AppData\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}
export function appdata(encoding:string='utf-8') {
    return findKnownFolders(/AppData\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}
export function startup(encoding:string='utf-8') {
    return findKnownFolders(/Startup\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}
export function programs(encoding:string='utf-8') {
    return findKnownFolders(/Programs\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}
export function video(encoding:string='utf-8') {
    return findKnownFolders(/Video\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}
export function pictures(encoding:string='utf-8') {
    return findKnownFolders(/Pictures\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}
export function music(encoding:string='utf-8') {
    return findKnownFolders(/Music\s+REG_EXPAND_SZ\s+(.+)/, encoding);
}