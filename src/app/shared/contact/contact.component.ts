import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment'; // Assure-toi que ce chemin est correct
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'; // Import EmailJS

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    // Initialisation du formulaire avec des validators
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]], // Ajout du validateur de type email
      subject: ['', [Validators.required]],
      comments: ['', [Validators.required]]
    });

    emailjs.init('8qdjqUCT9wFSp5Yig'); 
  }
  

  // Validation manuelle du formulaire
  ValidateForm(): boolean {
    const name = this.contactForm.get("name")?.value;
    const email = this.contactForm.get("email")?.value;
    const subject = this.contactForm.get("subject")?.value;
    const comments = this.contactForm.get("comments")?.value;

    if (!name) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i class='mdi mdi-alert-outline'></i> Veuillez entrer un nom.</div>";
      return false;
    }
    if (!email) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i class='mdi mdi-alert-outline'></i> Veuillez entrer un email valide.</div>";
      return false;
    }
    if (!subject) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i class='mdi mdi-alert-outline'></i> Veuillez entrer un sujet.</div>";
      return false;
    }
    if (!comments) {
      document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger error_message'><i class='mdi mdi-alert-outline'></i> Veuillez entrer un message.</div>";
      return false;
    }
    return true;
  }

  // Fonction pour envoyer le message via EmailJS
  sendMsg(): void {
    if (this.ValidateForm()) {
      const templateParams = {
        to_email: 'safiabalde2001@gmail.com', // Adresse e-mail du propriétaire
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.comments
      };

      // Envoi du formulaire via EmailJS
      emailjs.send('service_lumb1gs', 'template_031emj3', templateParams)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-success'><i class='mdi mdi-check-circle-outline'></i> Message envoyé avec succès.</div>";
        }, (error) => {
          console.log('FAILED...', error);
          document.getElementById('error-msg')!.innerHTML = "<div class='alert alert-danger'><i class='mdi mdi-alert-outline'></i> Échec de l'envoi. Veuillez réessayer.</div>";
        });
    }
  }
}
