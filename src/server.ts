import app from './app';

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
    console.log(`Servidor a la escucha en el puerto ${PORT}`);
});
