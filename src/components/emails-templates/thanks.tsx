import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

export function ThanksEmail() {
    return (
        <Html lang='pl'>
            <Head />
            <Preview>
                Graysound - Odkryj nowy wymiar słuchania
            </Preview>
            <Body style={main}>
                <Container style={container}>
                    <Img
                        src={`https://graysoundlab.b-cdn.net/v1/graysound-logo.png`}
                        height="28"
                        alt="Graysound - logo"
                        style={logo}
                    />
                    <Text style={paragraph}>
                        Z ogromnym entuzjazmem otrzymaliśmy Twoje zapytanie i chcielibyśmy serdecznie podziękować za zainteresowanie naszymi usługami. Już teraz cieszymy się na myśl o potencjalnej współpracy i jesteśmy pewni, że będziemy mogli spełnić Twoje oczekiwania.
                    </Text>
                    <Text style={paragraph}>
                        Twoje zapytanie zostało natychmiastowo przekazane do naszej reżyserki, która odpowie na twoje wszystkie pytania. Martyna skontaktuje się z Tobą jak najszybciej, aby omówić wszelkie szczegóły i przejść do kolejnych etapów realizacji. Dziękujemy za wybór GraySound i nie możemy się doczekać, aby przekształcić Twoją wizję w rzeczywistość.
                    </Text>
                    <Text style={paragraph}>
                        Z serdecznymi pozdrowieniami
                        <br />
                        Zespół GraySound
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>Jakub Sampławski GraySound | Rozbrat 16/18 m.35 00-447 Warszawa | NIP 7010992840</Text>
                </Container>
            </Body>
        </Html>
    )
};

export default ThanksEmail;

const main = {
    backgroundColor: '#0B0B14',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const logo = {
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#fff',
};

const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
};
