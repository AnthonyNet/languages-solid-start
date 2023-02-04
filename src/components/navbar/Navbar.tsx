import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import {
  IrregularVerbs,
  OxfordB1,
  OxfordB2,
  OxfordC1,
  LukesPhrasal,
  VerbenData,
  Goethe,
} from "../../myData/";

const styles = {
  nav: 'flex justify-center items-center w-full  min-h-[100px] shadow-xl z-[400] px-4',
  nav__div: 'navDetails w-full h-full flex items-start  relative text-xl ',
  aside: 'logo sm:w-1/3 ',
  article: 'justify-around items-start w-full h-full hidden md:flex',
  nav__ul: 'flex flex-col border-solid border-t-4 border-sky-400 navDetails',

}

const Navbar = () => {
  return (
    <nav
    class={styles.nav}
    /* style={darkMode ? stylesSwitch.dark.basic : stylesSwitch.light.basic}*/
  >
    <div class={styles.nav__div}>
      <aside class={styles.aside}>
        <A href="/">
          Learn <strong>languages</strong>
        </A>
      </aside>
      <article class={styles.article}>
        <A href="/">Home</A>
        <details class="cursor-pointer">
          <summary class="uppercase logo">
            <strong class="hover:text-sky-700">English</strong>
          </summary>
          <div class={styles.nav__ul}>
            <A href="/english/irregular-verbs">{`Irregular Verbs (${IrregularVerbs.length})`}</A>
            <A href="/english/search-irregular">{`Irregular List (${IrregularVerbs.length})`}</A>
            <A href="/english/oxford-B1">{`Oxford B1 (${OxfordB1.length})`}</A>
            <A href="/english/oxford-B2">{`Oxford B2 (${OxfordB2.length})`}</A>
            <A href="/english/oxford-C1">{`Oxford C1 (${OxfordC1.length})`}</A>
            <A href="/english/phrasal-verbs">{`Phrasal Verbs (${LukesPhrasal.length})`}</A>
            <A href="/english/pagination">Pagination</A>
          </div>
        </details>

        <details class="cursor-pointer">
          <summary class="uppercase logo">
            <strong class="hover:text-sky-700">Deutsch</strong>
          </summary>
          <ul class="flex flex-col border-solid border-t-4 border-sky-400 navDetails">
            <A href="/german/irregular-verbs">{`Unregelmäßige Verben (${VerbenData.length})`}</A>
            <A href="/german/goethe">{`Goethe (${Goethe.length})`}</A>
          </ul>
        </details>
      </article>

      <span class="hidden md:flex  bottom-2 right-4 text-3xl">
        Dark
      </span>

      <div class="text-4xl md:hidden ml-auto">
        Menu
      </div>
    </div>

    Nav
  </nav>
  )
}

export default Navbar