import { useContext } from "react"
import NoticiasContext from "../contex/NoticiasProvider"

const useNoticias = () =>{
    return useContext (NoticiasContext)
}

export default useNoticias