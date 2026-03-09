const COFFICE_ADDRESS = "Mohammadia Mall, 4ème étage, Bureau 1178, Alger";
const COFFICE_PHONE = "+213 23 804 924";
const COFFICE_MOBILE = "+213 795 38 01 24";
const COFFICE_EMAIL = "desk@coffice.dz";
const COFFICE_URL = "https://coffice.dz";

function baseLayout(title: string, content: string, preheader = ""): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${title}</title>
<style>
body{margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif}
.wrapper{max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06)}
.header{background:#ffffff;padding:32px 32px 24px;text-align:center;border-bottom:1px solid #e5e7eb}
.header img{height:48px;display:inline-block}
.header h1{color:#111827;font-size:18px;font-weight:700;margin:12px 0 0;letter-spacing:-0.3px}
.body{padding:32px}
.body h2{font-size:22px;font-weight:700;color:#111827;margin:0 0 8px;line-height:1.3}
.body p{font-size:15px;line-height:1.65;color:#4b5563;margin:0 0 16px}
.info-box{background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:20px;margin:20px 0}
.info-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;font-size:14px}
.info-row:last-child{border-bottom:none}
.info-label{color:#6b7280;font-weight:500}
.info-value{color:#111827;font-weight:600;text-align:right}
.cta-btn{display:inline-block;background:#059669;color:#ffffff !important;text-decoration:none;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:600;margin:16px 0;text-align:center}
.cta-btn:hover{background:#047857}
.cta-secondary{background:#111827}
.cta-secondary:hover{background:#1f2937}
.status-badge{display:inline-block;padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600}
.status-success{background:#ecfdf5;color:#059669}
.status-warning{background:#fffbeb;color:#d97706}
.status-danger{background:#fef2f2;color:#dc2626}
.status-info{background:#eff6ff;color:#2563eb}
.highlight-box{background:#111827;border-radius:10px;padding:24px;margin:20px 0;text-align:center}
.highlight-box .amount{font-size:32px;font-weight:800;color:#ffffff;margin:0}
.highlight-box .label{font-size:13px;color:#9ca3af;margin:4px 0 0}
.divider{height:1px;background:#e5e7eb;margin:24px 0}
.footer{background:#f9fafb;padding:24px 32px;text-align:center;border-top:1px solid #e5e7eb}
.footer p{font-size:12px;color:#9ca3af;margin:4px 0;line-height:1.5}
.footer a{color:#059669;text-decoration:none}
.preheader{display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#f4f5f7}
@media(max-width:640px){.wrapper{margin:0 12px;border-radius:0}.body{padding:24px 20px}.header{padding:20px}.info-row{flex-direction:column;gap:4px}.info-value{text-align:left}}
</style>
</head>
<body style="margin:0;padding:20px 0;background:#f4f5f7">
<div class="preheader">${preheader}</div>
<div class="wrapper">
<div class="header">
<a href="${COFFICE_URL}" style="text-decoration:none"><img src="${COFFICE_URL}/logo-web-transparent-black.png" alt="Coffice" style="height:48px;display:inline-block" /></a>
</div>
<div class="body">${content}</div>
<div class="footer">
<a href="${COFFICE_URL}" style="text-decoration:none"><img src="${COFFICE_URL}/logo-web-transparent-black.png" alt="Coffice" style="height:28px;display:inline-block;margin-bottom:12px;opacity:0.6" /></a>
<p>${COFFICE_ADDRESS}</p>
<p>Téléphone : ${COFFICE_PHONE} | Mobile : ${COFFICE_MOBILE}</p>
<p>Email : <a href="mailto:${COFFICE_EMAIL}">${COFFICE_EMAIL}</a> | <a href="${COFFICE_URL}">${COFFICE_URL}</a></p>
<div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb">
<p style="font-size:11px">Vous recevez cet e-mail car vous disposez d'un compte sur Coffice.</p>
</div>
</div>
</div>
</body>
</html>`;
}

function infoBox(rows: { label: string; value: string }[]): string {
  return `<div class="info-box">
${rows.map((r) => `<div class="info-row"><span class="info-label">${r.label}</span><span class="info-value">${r.value}</span></div>`).join("\n")}
</div>`;
}

export interface EmailTemplate {
  subject: string;
  html: string;
}

export interface WelcomeData {
  prenom: string;
  nom: string;
  email: string;
}

export function welcomeEmail(data: WelcomeData): EmailTemplate {
  const content = `
<h2>Bienvenue chez Coffice, ${data.prenom} !</h2>
<p>Nous sommes ravis de vous compter parmi nos membres. Votre compte a été créé avec succès.</p>
${infoBox([
  { label: "Nom complet", value: `${data.prenom} ${data.nom}` },
  { label: "E-mail", value: data.email },
])}
<p>Vous pouvez dès maintenant accéder à notre plateforme pour :</p>
<ul style="color:#4b5563;font-size:15px;line-height:2;padding-left:20px">
<li>Réserver un espace de travail (box, open space, salle de réunion)</li>
<li>Consulter les disponibilités en temps réel</li>
<li>Demander une domiciliation commerciale</li>
<li>Gérer vos réservations et abonnements</li>
</ul>
<div style="text-align:center">
<a href="${COFFICE_URL}/connexion" class="cta-btn">Accéder à mon espace</a>
</div>`;

  return {
    subject: "Bienvenue chez Coffice !",
    html: baseLayout("Bienvenue chez Coffice", content, "Votre compte Coffice a été créé avec succès"),
  };
}

export interface ReservationEmailData {
  prenom: string;
  espaceName: string;
  espaceType: string;
  dateDebut: string;
  dateFin: string;
  heureDebut: string;
  heureFin: string;
  duree: string;
  participants: number;
  montant: number;
  reservationId?: string;
  notes?: string;
}

export function reservationCreatedEmail(data: ReservationEmailData): EmailTemplate {
  const content = `
<h2>Réservation enregistrée</h2>
<p>Bonjour ${data.prenom}, votre réservation a bien été enregistrée et est en attente de confirmation.</p>
${infoBox([
  { label: "Espace", value: data.espaceName },
  { label: "Type", value: data.espaceType },
  { label: "Date", value: data.dateDebut },
  { label: "Horaire", value: `${data.heureDebut} – ${data.heureFin}` },
  { label: "Durée", value: data.duree },
  { label: "Participants", value: `${data.participants} personne${data.participants > 1 ? "s" : ""}` },
])}
<div class="highlight-box">
<p class="label">Montant estimé</p>
<p class="amount">${data.montant.toLocaleString("fr-DZ")} DA</p>
</div>
${data.notes ? `<p style="font-style:italic;color:#6b7280;font-size:14px">Notes : ${data.notes}</p>` : ""}
<p>Vous recevrez une confirmation par e-mail dès que votre réservation sera validée par notre équipe.</p>
<div style="text-align:center">
<a href="${COFFICE_URL}/app/reservations" class="cta-btn">Voir mes réservations</a>
</div>`;

  return {
    subject: `Réservation enregistrée – ${data.espaceName}`,
    html: baseLayout("Réservation enregistrée", content, `Votre réservation pour ${data.espaceName} a été enregistrée`),
  };
}

export function reservationConfirmedEmail(data: ReservationEmailData): EmailTemplate {
  const content = `
<h2>Réservation confirmée !</h2>
<p>Bonjour ${data.prenom}, bonne nouvelle ! Votre réservation a été confirmée.</p>
<div style="text-align:center;margin:20px 0">
<span class="status-badge status-success">Confirmée</span>
</div>
${infoBox([
  { label: "Espace", value: data.espaceName },
  { label: "Date", value: data.dateDebut },
  { label: "Horaire", value: `${data.heureDebut} – ${data.heureFin}` },
  { label: "Participants", value: `${data.participants} personne${data.participants > 1 ? "s" : ""}` },
  { label: "Montant", value: `${data.montant.toLocaleString("fr-DZ")} DA` },
])}
<p>Nous vous attendons au 4ème étage du Mohammadia Mall, Bureau 1178.</p>
<p style="font-size:14px;color:#6b7280">En cas de besoin, contactez-nous au ${COFFICE_MOBILE} ou par e-mail à ${COFFICE_EMAIL}.</p>
<div style="text-align:center">
<a href="${COFFICE_URL}/app/reservations" class="cta-btn">Voir ma réservation</a>
</div>`;

  return {
    subject: `Réservation confirmée – ${data.espaceName}`,
    html: baseLayout("Réservation confirmée", content, `Votre réservation pour ${data.espaceName} est confirmée`),
  };
}

export function reservationCancelledEmail(data: ReservationEmailData & { raison?: string }): EmailTemplate {
  const content = `
<h2>Réservation annulée</h2>
<p>Bonjour ${data.prenom}, votre réservation a été annulée.</p>
<div style="text-align:center;margin:20px 0">
<span class="status-badge status-danger">Annulée</span>
</div>
${infoBox([
  { label: "Espace", value: data.espaceName },
  { label: "Date", value: data.dateDebut },
  { label: "Horaire", value: `${data.heureDebut} – ${data.heureFin}` },
  { label: "Montant", value: `${data.montant.toLocaleString("fr-DZ")} DA` },
])}
${data.raison ? `<div class="info-box" style="border-color:#fecaca;background:#fef2f2"><p style="margin:0;font-size:14px;color:#991b1b"><strong>Motif :</strong> ${data.raison}</p></div>` : ""}
<p>Si vous souhaitez effectuer une nouvelle réservation, n'hésitez pas à accéder à votre espace personnel.</p>
<div style="text-align:center">
<a href="${COFFICE_URL}/app/reservations" class="cta-btn cta-secondary">Nouvelle réservation</a>
</div>`;

  return {
    subject: `Réservation annulée – ${data.espaceName}`,
    html: baseLayout("Réservation annulée", content, `Votre réservation pour ${data.espaceName} a été annulée`),
  };
}

export function reservationReminderEmail(data: ReservationEmailData): EmailTemplate {
  const content = `
<h2>Rappel : réservation demain</h2>
<p>Bonjour ${data.prenom}, nous vous rappelons que votre réservation est prévue pour demain.</p>
${infoBox([
  { label: "Espace", value: data.espaceName },
  { label: "Date", value: data.dateDebut },
  { label: "Horaire", value: `${data.heureDebut} – ${data.heureFin}` },
  { label: "Participants", value: `${data.participants} personne${data.participants > 1 ? "s" : ""}` },
])}
<div class="info-box">
<p style="margin:0;font-size:14px;color:#374151"><strong>Adresse :</strong> ${COFFICE_ADDRESS}</p>
<p style="margin:8px 0 0;font-size:14px;color:#374151"><strong>Téléphone :</strong> ${COFFICE_MOBILE}</p>
</div>
<p>À demain chez Coffice !</p>`;

  return {
    subject: `Rappel – Réservation demain à ${data.heureDebut}`,
    html: baseLayout("Rappel de réservation", content, `Rappel : votre réservation est prévue demain à ${data.heureDebut}`),
  };
}

export interface DomiciliationEmailData {
  prenom: string;
  raisonSociale: string;
  formeJuridique?: string;
  statut: string;
  statutLabel: string;
  montantMensuel?: number;
  commentaire?: string;
  dateDebut?: string;
  dateFin?: string;
}

export function domiciliationSubmittedEmail(data: DomiciliationEmailData): EmailTemplate {
  const content = `
<h2>Demande de domiciliation reçue</h2>
<p>Bonjour ${data.prenom}, votre demande de domiciliation commerciale a bien été enregistrée.</p>
<div style="text-align:center;margin:20px 0">
<span class="status-badge status-warning">En cours de traitement</span>
</div>
${infoBox([
  { label: "Raison sociale", value: data.raisonSociale },
  { label: "Forme juridique", value: data.formeJuridique || "—" },
  { label: "Adresse de domiciliation", value: COFFICE_ADDRESS },
])}
<p>Notre équipe va examiner votre dossier dans les meilleurs délais. Vous serez notifié(e) à chaque étape de la progression.</p>
<p style="font-size:14px;color:#6b7280">Pour toute question, contactez-nous au ${COFFICE_MOBILE} ou à ${COFFICE_EMAIL}.</p>
<div style="text-align:center">
<a href="${COFFICE_URL}/app/mon-espace?tab=domiciliation" class="cta-btn">Suivre ma demande</a>
</div>`;

  return {
    subject: `Demande de domiciliation enregistrée – ${data.raisonSociale}`,
    html: baseLayout("Demande de domiciliation", content, `Votre demande de domiciliation pour ${data.raisonSociale} a été enregistrée`),
  };
}

export function domiciliationStatusEmail(data: DomiciliationEmailData): EmailTemplate {
  const statusClass =
    data.statut === "active" || data.statut === "domiciliation_creee"
      ? "status-success"
      : data.statut === "refusee" || data.statut === "resiliee"
      ? "status-danger"
      : "status-warning";

  const rows = [
    { label: "Raison sociale", value: data.raisonSociale },
    { label: "Statut", value: data.statutLabel },
  ];
  if (data.montantMensuel) rows.push({ label: "Montant mensuel", value: `${data.montantMensuel.toLocaleString("fr-DZ")} DA` });
  if (data.dateDebut) rows.push({ label: "Date de début", value: data.dateDebut });
  if (data.dateFin) rows.push({ label: "Date de fin", value: data.dateFin });

  const content = `
<h2>Mise à jour de votre domiciliation</h2>
<p>Bonjour ${data.prenom}, le statut de votre domiciliation a été mis à jour.</p>
<div style="text-align:center;margin:20px 0">
<span class="status-badge ${statusClass}">${data.statutLabel}</span>
</div>
${infoBox(rows)}
${data.commentaire ? `<div class="info-box"><p style="margin:0;font-size:14px;color:#374151"><strong>Commentaire :</strong> ${data.commentaire}</p></div>` : ""}
<div style="text-align:center">
<a href="${COFFICE_URL}/app/mon-espace?tab=domiciliation" class="cta-btn">Voir les détails</a>
</div>`;

  return {
    subject: `Domiciliation – ${data.statutLabel}`,
    html: baseLayout("Mise à jour domiciliation", content, `Votre domiciliation est maintenant : ${data.statutLabel}`),
  };
}

export function domiciliationActivatedEmail(data: DomiciliationEmailData): EmailTemplate {
  const content = `
<h2>Domiciliation activée !</h2>
<p>Bonjour ${data.prenom}, félicitations ! Votre domiciliation commerciale est désormais active.</p>
<div style="text-align:center;margin:20px 0">
<span class="status-badge status-success">Active</span>
</div>
${infoBox([
  { label: "Raison sociale", value: data.raisonSociale },
  { label: "Adresse", value: COFFICE_ADDRESS },
  { label: "Montant mensuel", value: data.montantMensuel ? `${data.montantMensuel.toLocaleString("fr-DZ")} DA` : "—" },
  { label: "Début du contrat", value: data.dateDebut || "—" },
])}
<p>Vous pouvez désormais utiliser l'adresse de Coffice comme siège social de votre entreprise.</p>
<p style="font-size:14px;color:#6b7280">Pour la réception de votre courrier et toute question administrative, contactez-nous au ${COFFICE_MOBILE} ou à ${COFFICE_EMAIL}.</p>
<div style="text-align:center">
<a href="${COFFICE_URL}/app/mon-espace?tab=domiciliation" class="cta-btn">Mon espace domiciliation</a>
</div>`;

  return {
    subject: `Domiciliation activée – ${data.raisonSociale}`,
    html: baseLayout("Domiciliation activée", content, `Votre domiciliation pour ${data.raisonSociale} est désormais active`),
  };
}

export function domiciliationRejectedEmail(data: DomiciliationEmailData): EmailTemplate {
  const content = `
<h2>Demande de domiciliation refusée</h2>
<p>Bonjour ${data.prenom}, nous sommes au regret de vous informer que votre demande de domiciliation n'a pas pu être acceptée.</p>
<div style="text-align:center;margin:20px 0">
<span class="status-badge status-danger">Refusée</span>
</div>
${infoBox([
  { label: "Raison sociale", value: data.raisonSociale },
])}
${data.commentaire ? `<div class="info-box" style="border-color:#fecaca;background:#fef2f2"><p style="margin:0;font-size:14px;color:#991b1b"><strong>Motif :</strong> ${data.commentaire}</p></div>` : ""}
<p>Si vous pensez qu'il s'agit d'une erreur ou si vous souhaitez soumettre une nouvelle demande, n'hésitez pas à nous contacter au ${COFFICE_MOBILE} ou à ${COFFICE_EMAIL}.</p>
<div style="text-align:center">
<a href="${COFFICE_URL}/app/mon-espace?tab=domiciliation" class="cta-btn cta-secondary">Nous contacter</a>
</div>`;

  return {
    subject: `Domiciliation refusée – ${data.raisonSociale}`,
    html: baseLayout("Domiciliation refusée", content, `Votre demande de domiciliation pour ${data.raisonSociale} a été refusée`),
  };
}

export interface PasswordResetData {
  prenom: string;
  resetLink: string;
}

export function passwordResetEmail(data: PasswordResetData): EmailTemplate {
  const content = `
<h2>Réinitialisation de votre mot de passe</h2>
<p>Bonjour ${data.prenom}, vous avez demandé la réinitialisation de votre mot de passe.</p>
<p>Cliquez sur le bouton ci-dessous pour définir un nouveau mot de passe :</p>
<div style="text-align:center">
<a href="${data.resetLink}" class="cta-btn">Réinitialiser mon mot de passe</a>
</div>
<p style="font-size:13px;color:#9ca3af;margin-top:24px">Ce lien est valable pendant 1 heure. Si vous n'avez pas fait cette demande, ignorez simplement cet e-mail.</p>`;

  return {
    subject: "Réinitialisation de votre mot de passe – Coffice",
    html: baseLayout("Réinitialisation mot de passe", content, "Réinitialisation de votre mot de passe Coffice"),
  };
}

export interface AdminNotificationData {
  type:
    | "new_user"
    | "new_reservation"
    | "new_domiciliation"
    | "reservation_cancelled"
    | "reservation_confirmed"
    | "domiciliation_status_update"
    | "password_reset_requested";
  userName: string;
  userEmail: string;
  details: { label: string; value: string }[];
}

export function adminNotificationEmail(data: AdminNotificationData): EmailTemplate {
  const titles: Record<string, string> = {
    new_user: "Nouvelle inscription",
    new_reservation: "Nouvelle réservation",
    new_domiciliation: "Nouvelle demande de domiciliation",
    reservation_cancelled: "Réservation annulée",
    reservation_confirmed: "Réservation confirmée",
    domiciliation_status_update: "Mise à jour domiciliation",
    password_reset_requested: "Demande de réinitialisation mot de passe",
  };

  const subjects: Record<string, string> = {
    new_user: `[Admin] Nouvelle inscription – ${data.userName}`,
    new_reservation: `[Admin] Nouvelle réservation – ${data.userName}`,
    new_domiciliation: `[Admin] Nouvelle domiciliation – ${data.userName}`,
    reservation_cancelled: `[Admin] Annulation réservation – ${data.userName}`,
    reservation_confirmed: `[Admin] Réservation confirmée – ${data.userName}`,
    domiciliation_status_update: `[Admin] Domiciliation mise à jour – ${data.userName}`,
    password_reset_requested: `[Admin] Réinitialisation mot de passe – ${data.userName}`,
  };

  const content = `
<h2>${titles[data.type]}</h2>
<p style="font-size:14px;color:#6b7280">Notification automatique du système Coffice</p>
${infoBox([
  { label: "Utilisateur", value: data.userName },
  { label: "E-mail", value: data.userEmail },
  ...data.details,
])}
<div style="text-align:center">
<a href="${COFFICE_URL}/erp" class="cta-btn cta-secondary">Accéder au tableau de bord</a>
</div>`;

  return {
    subject: subjects[data.type],
    html: baseLayout(titles[data.type], content, `${titles[data.type]} : ${data.userName}`),
  };
}
