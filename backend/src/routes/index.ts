import { Router } from 'express'
import routeArticulos from './articulo.routes'
import routeIngresos from './ingresos.routes'
import routeMateriaPrima from './materia_prima.routes'
import routeCarta from './carta.routes'
import routeTabla from './tablamaestra.routes'
import routeAutorizacion from './autorizacion.routes'
import routeVentas from './ventas.routes'
import routeCcorriente from './ccorriente.routes'
import { verifyToken } from '../helpers'
import controllerUpload from '../controllers/upload'
const app = Router()

app.use('/articulos', verifyToken, routeArticulos)
app.use('/ingresos', verifyToken,routeIngresos)
app.use('/materia_prima', verifyToken,routeMateriaPrima)
app.use('/carta', verifyToken,routeCarta)
app.use('/tabla', verifyToken,routeTabla)
app.use('/ventas', verifyToken,routeVentas)
app.use('/ccorriente', verifyToken, routeCcorriente)
app.use('/upload',verifyToken, controllerUpload)

app.use('/autorizacion', routeAutorizacion)

export default app