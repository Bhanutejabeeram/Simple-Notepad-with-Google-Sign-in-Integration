function signIn(){
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
    
    let form = document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)

    let params ={
        "client_id":"Paste Your Client ID",
        "redirect_uri":"Paste Your redirect url",
        "response_type":"token",
        "scope":"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
        "include_granted_scopes":'true',
        "state":"pass-through-value"

    }

    for(var p in params){
        let input = document.createElement('input')
        input.setAttribute('type','hidden')
        input.setAttribute('name',p)
        input.setAttribute('value',params[p])
        form.appendChild(input)

    }

    document.body.appendChild(form)
    form.submit()
}