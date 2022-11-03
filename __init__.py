#==============================
# Imports.
#==============================

import asyncio
import ctypes
import os
import platform

from threading import Thread

#==============================
# Init method (Monika.exe).
#==============================

class init:

    def __init__(self , CWD , systemArchitecture , systemType , systemUser):

        ## CHECK OS FOR BACKROUND CHANGE: ##

        if systemType == "Windows":

            ## CHANGE WALLPAPER FOR WINDOWS: ##

            WALLPAPER_PATH = (fr"{CWD}\AudioVisuals\Images\TW9uaWth.png")

            ctypes.windll.user32.SystemParametersInfoW(20 , 0 , WALLPAPER_PATH , 0)

        else:

            ## SHOULD END THE SCRIPT: ##
            
            pass

#==============================
# Init method (System configs).
#==============================

class init_sys:

    def __init__(self):

        CWD = os.getcwd()

        PLATFORM_ARCHITECTURE = platform.architecture()

        SYS_TYPE = platform.system()

        SYS_USER = os.getlogin()

        init(CWD , PLATFORM_ARCHITECTURE , SYS_TYPE , SYS_USER)

init_sys()