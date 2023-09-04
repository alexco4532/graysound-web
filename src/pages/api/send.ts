import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(`${process.env.RESEND_ID}`);

type RequestBody = {
  type?: string;
  email: string;
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body: RequestBody = JSON.parse(req.body);
  try {
    const data = await resend.emails.send({
      from: 'Graysound <noreply@graysoundlab.com>',
      to: [`${body.email}`],
      subject: `Formularz zgłoszeniowy - Graysound`,
      text: `Z ogromnym entuzjazmem otrzymaliśmy Twoje zapytanie i chcielibyśmy serdecznie podziękować za zainteresowanie naszymi usługami. Już teraz cieszymy się na myśl o potencjalnej współpracy i jesteśmy pewni, że będziemy mogli spełnić Twoje oczekiwania. Twoje zapytanie zostało natychmiastowo przekazane do naszej reżyserki, która odpowie na twoje wszystkie pytania. Martyna skontaktuje się z Tobą jak najszybciej, aby omówić wszelkie szczegóły i przejść do kolejnych etapów realizacji. Dziękujemy za wybór GraySound i nie możemy się doczekać, aby przekształcić Twoją wizję w rzeczywistość. Z serdecznymi pozdrowieniami, Zespół GraySound`
    });

    const notification = await resend.emails.send({
      from: 'Form <noreply@graysoundlab.com>',
      to: [
        'kontakt@graysoundlab.com',
        'valgardviggo@gmail.com',
        'j.samplawski@gmail.com',
        'j.samplawski@graysoundlab.com',
        'm.szymanska@graysoundlab.com'
      ],
      subject: `Zapytanie od ${body.email}`,
      text: `Adres email: ${body.email}. Wiadomość: ${body.message}`
    });

    res.status(200).json(notification);
  } catch (error) {
    res.status(400).json(error);
  }
};
