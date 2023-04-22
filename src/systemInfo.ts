const si = require("systeminformation");
const os = require("os");
import fs from "fs";

function systemInfofunc() {
    si.cpu().then((data: any) => {
        const cpuInfoList: {} = {
            "manufacturer" : `${data.manufacturer}`,
            "brand" : `${data.brand}`,
            "speed" : `${data.speed}`,
            "speedMin" : `${data.speedMin}GHz`,
            "speedMax" : `${data.speedMax}GHz`,
            "governor" : `${data.governor}`,
            "cores" : `${data.cores}`,
            "physicalCores" : `${data.physicalCores}`,
            "performanceCores" : `${data.performanceCores}`,
            "efficiencyCores" : `${data.efficiencyCores}`,
            "processors" : `${data.processors}`,
            "socket" : `${data.socket}`,
            "vendor" : `${data.vendor}`,
            "family" : `${data.family}`,
            "model" : `${data.model}`,
            "stepping" : `${data.stepping}`,
            "revision" : `${data.revision}`,
            "voltage" : `${data.voltage}`,
            "flags" : `${data.flags}`,
            "virtualisation" : `${data.virtualisation}`,
            "cache" : `${data.cache}`,
            "cache.l1d" : `${data.cache.l1d}`,
            "cache.l1i" : `${data.cache.l1i}`,
            "cache.l2" : `${data.cache.l2}`,
            "cache.l3" : `${data.cache.l3}`
        };

    si.mem().then((data: any) => {
        const memInfoList: {} = {
            "total" : `${data.total}`,
            "free" : `${data.free}`,
            "used" : `${data.used}`,
            "active" : `${data.active}`,
            "buffcache" : `${data.buffcache}`,
            "buffers" : `${data.buffers}`,
            "cached" : `${data.cached}`,
            "slab" : `${data.slab}`,
            "available" : `${data.available}`,
            "swaptotal" : `${data.swaptotal}`,
            "swapused" : `${data.swapused}`,
            "swapfree" : `${data.swapfree}`
        };

    si.battery().then((data: any) => {
        const batteryInfoList: {} = {
            "hasBattery" : `${data.hasBattery}`,
            "cycleCount" : `${data.cycleCount}`,
            "isCharging" : `${data.isCharging}`,
            "designedCapacity" : `${data.designedCapacity}`,
            "maxCapacity" : `${data.maxCapacity}`,
            "currentCapacity" : `${data.currentCapacity}`,
            "capacityUnit" : `${data.capacityUnit}`,
            "voltage" : `${data.voltage}`,
            "percent" : `${data.percent}`,
            "timeRemaining" : `${data.timeRemaining}`,
            "acConnected" : `${data.acConnected}`,
            "type" : `${data.type}`,
            "model" : `${data.model}`,
            "manufacturer" : `${data.manufacturer}`,
            "serial" : `${data.serial}`,
            "additionaBatteries" : `${data.additionaBatteries}`,
        }

        const systemName = os.hostname();
        const systemInfo = {
            [systemName]: {
                cpuInfo: cpuInfoList,
                memInfo: memInfoList,
                batteryInfo: batteryInfoList
            }
        };

            const jsonString = JSON.stringify(systemInfo, null, 4);
            fs.writeFile("config\\systemInfo.json", jsonString, (err) => {
                if (err) {
                    console.error("Error writing to the systemInfo database: ", err);
                } else {
                    console.log("Succcess writing to the systemInfo database!");
                }
            });

            })
    
        });
    });
}

systemInfofunc();
