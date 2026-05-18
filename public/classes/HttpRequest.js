class HttpRequest {
    static get(url, params = {}) {
        return HttpRequest.request('GET', url, params);
    }

    static post(url, params = {}) {
        return HttpRequest.request('POST', url, params);
    }
    
    static delete(url, params = {}) {
        return HttpRequest.request('DELETE', url, params);
    }
    
    static put(url, params = {}) {
        return HttpRequest.request('PUT', url, params);
    }
    
    
    static request(method, url, params = {}) {
        return new Promise((resolve, reject)=> {
            let ajax = new XMLHttpRequest();

            ajax.open(method.toUpperCase(), url);
            ajax.onerror = event => {
               reject(event);
            }
            ajax.onload = event => {
                let obj = {};    
                
                
                if (ajax.status >= 200 && ajax.status < 300) {
                    try {
                        obj = JSON.parse(ajax.responseText);
                        resolve(obj);
                    } catch (e) {
                        reject(e);
                        console.error("Erro ao converter JSON:", e);
                    }
                } else {
                    reject(new Error(`Erro HTTP: ${ajax.status} - ${ajax.statusText}`));
                }
            };
                    ajax.setRequestHeader('Content-Type', 'application/json');
                    ajax.send(JSON.stringify(params));   
        });
    }
}