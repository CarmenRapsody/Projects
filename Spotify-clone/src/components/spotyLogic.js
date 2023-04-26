
/** Esta funcion va a extraer el token del usuarios de la url que nos facilita spoty */
export const getTokenFromURL = () => {
    return window.location.hash.substring(1).split("&")
   /**  
    *   - Window.location.hash --> retornar la parte ancla de un URL.
            Suponemos que tenemos la siguiente url: http://example.com/test.htm#part2
            Entonces window.location.hash retornara lo que viene despues de # : #part2
        - substring(1) --> extrae el primer caracter, e imprime el resto de la cadena : part2
            * Ej: Si tenemos "hello world":
                substring(1, 4) --> retorna "ello"
                substring(1) --> retorna "ello world"
        - split divide un string en un array de cadenas, mediante la separacion "&"
        de forma que convertimos le token de acceso en un array dividido por & 
    */ 
   
   .reduce((initial, item) => {
            //accessToken=sadgfdsrrge&name=javascriptdenoobpro 
            //ejecuta una funcion reductora sobre cada elemento del array da como resultado un solo valor
            let parts = item.split("=")
            initial[parts[0]] = decodeURIComponent(parts[1]) //Decodifica la url
            return initial
        },{}) 
}


const endpoint = "https://accounts.spotify.com/authorize"
const clientID = "fc8120944f444f0689b8bdf4ede4d498"
const redirectUri ="http://localhost:3000/callback"
const scopes=["user-read-currently-playing", 
              "user-read-recently-played", 
              "user-read-playback-state", 
              "user-top-read",
              "user-modify-playback-state"]
/** los scopes son las cosas que podemos hacer*/

export const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`

 
//--- substring(1) --> access_token=BQCJDqhOhrK1mZnIGhUfNlGC64iiUielFJyDV5fdX9F6vnlkVFOST3-rUVrCIMckmEGwQm1B-v_0LOoSJMnEK7ElCfAIj_lu7VOhM9h-G99MVNVgkGJt-76igQE8WFuo8Fzi-IlIAwgZD5h9IEMHo9maZasorjyjIWBnaXR8bIdlg1H1lrdV63HcOuAt4VoPMH32vDDSq7KxO_g_U7bq8w&token_type=Bearer&expires_in=3600
//--- split("&") --> Descomponemos el string en cadenas de arrays que estaban separadas por &
//---          Obteniendo
//---              [" access_token = BQCJDqhOhrK1mZnIGhUfNlGC64iiUielFJyDV5fdX9F6vnlkVF…XR8bIdlg1H1lrdV63HcOuAt4VoPMH32vDDSq7KxO_g_U7bq8w",
//---              "token_type=Bearer",
// ---             "expires_in: '3600" ]

//---- split ("=") --> Descomponemos el string en cadenas de arrays que estaban separadas por =
//---                  Obteniendo:
//----                  parts = [["access_token", ""], ["token_type", "Bearer"],["expires_in", "3600"]]
//----                  parts[0] = ["access_token", ""]
