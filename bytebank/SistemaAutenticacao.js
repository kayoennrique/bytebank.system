// Ser autenticavel significa ter o metodo autenticar
// (ducky type)

export class SistemaAutencicacao{
    static login(autenticavel, senha){
        if(SistemaAutencicacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;        
    }

    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}