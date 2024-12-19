# win-known-folders

A small package to easily retrieve the paths of Windows "known folders."

Folders like 'Documents' can be modified by the user, so you should avoid accessing them using hardcoded paths like `process.env["USERPROFILE"] + "/documents"`.

This package references registry values to return the paths of known folders.

## Example

``` js
import { appdata, localAppdata, personal, video, music } from 'windows-known-folders';

console.log(personal());
console.log(appdata());
console.log(localAppdata());
console.log(video());
console.log(music());
```

## Supported Folders

- `desktop`
- `personal` (Document folder)
- `favorites`
- `pictures`
- `video`
- `music`
- `startup`
- `appdata`
- `localAppdata`
- `programs`