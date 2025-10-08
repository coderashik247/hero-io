import { toast } from "react-toastify";

export const getApps = () => {
    let apps = [];
    const storedApps = localStorage.getItem('apps');
    if(storedApps){
        apps = JSON.parse(storedApps);
    }
    return apps;
}

export const saveApps = (app) => {
    let apps = getApps();
    const isExist = apps.find(a => a.id === app.id)
    if(isExist){
        return toast.error(`⚠️ ${app.subtitle} is Already Installed!`);
    }
    else{
        apps.push(app);
        localStorage.setItem('apps', JSON.stringify(apps))
        toast.success(`${app.subtitle} Successfully Installed!`);
    }
}

export const deleteApps = (app) =>{
    let apps = getApps();
    const remaining = apps.filter(a => a.id !== app.id)
    localStorage.setItem('apps', JSON.stringify(remaining))
    toast.success(`${app.subtitle} Uninstalled Successfully!`);
}