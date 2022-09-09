import { AlertController } from '@ionic/angular';

async function showAlert(header, message, handler ) {
    const alert = await this.alertController.create({
        header: header,
        message: message,
        buttons: [
          {
            text: 'OK',
            handler: (blah) => {
              this.route.navigate(['/inicio', this.catalog]);
            },
          },
        ],
      });
      await alert.present();
}