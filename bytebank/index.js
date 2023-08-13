import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutencicacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Kayo Ennrique", 100, 1234567890);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Rai", 5000, 12378945601);
gerente.cadastrarSenha("123")

const cliente = new Cliente ("Helena", 78945612379, "456")
const diretorLogado = SistemaAutencicacao.login(diretor,"123456789")
const gerenteLogado = SistemaAutencicacao.login(gerente,"123")


const clienteLogado = SistemaAutencicacao.login(cliente,"456")

console.log(gerenteLogado, diretorLogado, clienteLogado);