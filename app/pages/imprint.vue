<template>
  <div>
    <AppHeader />
    <main class="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400">
        <Icon name="lucide:arrow-left" class="size-4" />
        Back home
      </NuxtLink>

      <div class="legal mt-8">
        <h1>Impressum</h1>
        <h2>Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB</h2>

        <p>
          <strong>Webseitenbetreiber:</strong> Daniel Peinhopf<br />
          <strong>Email:</strong> <a href="mailto:contact@danielpeinhopf.com">contact@danielpeinhopf.com</a>
        </p>

        <p><strong>Anwendbare Rechtsvorschrift:</strong> www.ris.bka.gv.at</p>

        <h3>Online Streitbeilegung</h3>
        <p>
          Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die
          Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer
          Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit:
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
        </p>

        <h3>Urheberrecht</h3>
        <p>
          Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem
          Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt
          ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.
        </p>

        <h3>Haftungsausschluss</h3>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die
          Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger
          Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend
          zu entfernen.<br />
          Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie
          trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
          Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.
        </p>

        <p class="text-xs">
          Quelle: <a href="https://ghostweb.agency/impressum-generator-oesterreich/" target="_blank" rel="noopener noreferrer">Impressum Generator</a>
        </p>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Imprint - Daniel Peinhopf' })
</script>
