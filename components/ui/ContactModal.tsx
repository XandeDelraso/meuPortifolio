"use client";

import Modal from "@/components/ui/Modal";
import { MailIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { useTranslations } from "@/lib/context/LanguageContext";
import { contact } from "@/lib/data/resume";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useTranslations();

  return (
    <Modal open={open} onClose={onClose} title={t.contactModal.title} closeLabel={t.common.close}>
      <div className="flex flex-col gap-4 text-sm">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-700 transition-colors duration-300 hover:border-neutral-400 hover:text-neutral-900"
        >
          <MailIcon className="h-5 w-5 shrink-0" />
          {contact.email}
        </a>
        <a
          href={contact.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-700 transition-colors duration-300 hover:border-neutral-400 hover:text-neutral-900"
        >
          <LinkedInIcon className="h-5 w-5 shrink-0" />
          {contact.linkedin.label}
        </a>
      </div>
    </Modal>
  );
}
