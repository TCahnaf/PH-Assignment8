const getStoredApp = () => {
    const app = localStorage.getItem("installedApp")

    if(app) {
        const appData = JSON.parse(app);
        return appData;

    }

    else {
        return [];
    }


}


const addToStoredApps = (id) => {
    const storedAppData = getStoredApp();
    if(storedAppData.includes(id)) {
        alert("Already Installed")
    }
    else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("installedApp", data)


    }

}

export {addToStoredApps, getStoredApp}