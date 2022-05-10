import {Container, Grid, Typography} from '@mui/material';
import Formulario from './Components/Formulario';
import ListadoNoticias from './Components/ListadoNoticias';
import {NoticiasProvider} from './contex/NoticiasProvider'

function App() {


  return (
    <>
  <NoticiasProvider>
     <Container>
       <header>
         <Typography align='center' marginY={5} component="h1" variant="h3">
            Buscador de Noticias
         </Typography>
       </header>
       <Grid 
       container
       direction="row"
       justifyContent="center"
       alignContent="center" 
       >
          <Grid item xs={12} lg={4} md={6}>
              <Formulario></Formulario>
          </Grid>
       </Grid>
    <ListadoNoticias></ListadoNoticias>
     </Container>
    </NoticiasProvider>
    </>
  )
}

export default App
