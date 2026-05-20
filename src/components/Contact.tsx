import Icon from "./Icon";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/30 via-cyan-400/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              Kontakt
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Wypełnij formularz
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Oddzwonimy, omówimy potrzeby i podamy wycenę — najczęściej w
              ciągu kilku godzin. Bezpłatnie i bez zobowiązań.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+48788304845"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-sky-400/40 hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white">
                  <Icon name="phone" />
                </span>
                <div>
                  <div className="text-xs text-white/50">Telefon</div>
                  <div className="font-semibold">+48 788 304 845</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white">
                  <Icon name="map" />
                </span>
                <div>
                  <div className="text-xs text-white/50">Siedziba</div>
                  <div className="font-semibold">
                    Jachranka 45, k. Serocka
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white">
                  <Icon name="award" />
                </span>
                <div>
                  <div className="text-xs text-white/50">Ocena</div>
                  <div className="font-semibold">5/5 na Google</div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-5">
              <div className="flex items-start gap-3">
                <span className="relative mt-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-400" />
                </span>
                <p className="text-sm text-sky-100">
                  <strong>Odpowiadamy szybko.</strong> Wypełnij formularz, a
                  oddzwonimy, aby omówić szczegóły i podać wycenę.
                </p>
              </div>
            </div>
          </div>

          {/* Formularz — standardowy POST do FormSubmit */}
          <form
            action="https://formsubmit.co/robert.szymonek@robogaz.pl"
            method="POST"
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl sm:p-8"
          >
            {/* Ukryte pola konfiguracyjne FormSubmit */}
            <input type="hidden" name="_subject" value="Nowe zapytanie — CzasKlimy.pl" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://czasklimy.pl/#kontakt" />

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Imię i nazwisko">
                <input
                  required
                  name="Imię i nazwisko"
                  className="input"
                  placeholder="Jan Kowalski"
                />
              </Field>
              <Field label="Telefon">
                <input
                  required
                  type="tel"
                  name="Telefon"
                  className="input"
                  placeholder="+48 ..."
                />
              </Field>
              <Field label="E-mail" full>
                <input
                  type="email"
                  name="Email"
                  className="input"
                  placeholder="jan@domena.pl"
                />
              </Field>
              <Field label="Miasto">
                <select name="Miasto" className="input">
                  {[
                    "Legionowo",
                    "Warszawa Białołęka",
                    "Serock",
                    "Marki",
                    "Jabłonna",
                    "Nieporęt",
                    "Wieliszew",
                    "Skrzeszew",
                    "Jachranka",
                    "Inne",
                  ].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Rodzaj usługi">
                <select name="Rodzaj usługi" className="input">
                  {[
                    "Montaż klimatyzacji",
                    "Serwis klimatyzacji",
                    "Klimatyzacja multisplit",
                    "Klimatyzacja do biura",
                    "Przegląd okresowy",
                    "Inne",
                  ].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Przybliżony metraż">
                <input
                  name="Przybliżony metraż"
                  className="input"
                  placeholder="np. 25 m²"
                />
              </Field>
              <Field label="Dodatkowe informacje" full>
                <textarea
                  rows={4}
                  name="Dodatkowe informacje"
                  className="input resize-none"
                  placeholder="Np. salon 30 m², 3 piętro, okna od południa..."
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-sky-500/30 transition hover:brightness-110"
            >
              Wyślij zapytanie
              <Icon name="arrow" className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-white/50">
              Wysyłając formularz akceptujesz politykę prywatności. Nie
              spamujemy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">
        {label}
      </span>
      {children}
    </label>
  );
}
