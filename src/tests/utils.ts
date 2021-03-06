import path from 'path';

export const TIMEOUT = 60000;
export const outputDir = (osName: string): string => path.resolve(__dirname, '..', '..', 'out', osName);

export const metadata = {
  darwin:
    'https://download.qt.io/online/qtsdkrepository/mac_x64/desktop/qt5_5130/qt.qt5.5130.clang_64/5.13.0-0-201906171525qtbase-MacOS-MacOS_10_13-Clang-MacOS-MacOS_10_13-X86_64.7z',
  win32:
    'https://download.qt.io/online/qtsdkrepository/windows_x86/desktop/qt5_5130/qt.qt5.5130.win64_msvc2017_64/5.13.0-0-201906171525qtbase-Windows-Windows_10-MSVC2017-Windows-Windows_10-X86_64.7z',
  linux:
    'https://download.qt.io/online/qtsdkrepository/linux_x64/desktop/qt5_5130/qt.qt5.5130.gcc_64/5.13.0-0-201906171524qtbase-Linux-RHEL_7_6-GCC-Linux-RHEL_7_6-X86_64.7z',
};
