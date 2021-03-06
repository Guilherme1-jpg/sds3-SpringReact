import{Textcustom} from './styled';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <Textcustom>
                <p className="text-light">App desenvolvido por <a href="https://github.com/Guilherme1-jpg" target="_blank" rel="noreferrer">Guilherme Henrique</a></p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                    </Textcustom>
            </div>
        </footer>

    );
}

export default Footer;