import { A } from "solid-start";
import Counter from "~/components/Counter";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { Root } from "../components/main_Page/interface";
import Table from "../components/main_Page/Table";

const styles = {
  section:
    "responsiveSection flex flex-col justify-center items-center w-full min-h-[88vh] h-auto sm:h-[90%] border-red-300  border-t-2",
  card__div:
    "mainCard w-[300px] h-[420px] cursor-pointer group perspective",
  card__div__div:
    "preserve-3d group-hover:my-rotate-y-180  w-full h-full duration-1000",
  card__div__div__div: "w-full h-full",
  cardBack:
    "mainCardBack bg-white my-rotate-y-180  backface-hidden w-full h-full mt-[-420px] overflow-hidden shadow-lg shadow-gray-400",
  cardBack__div:
    "text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 ",
  cardBack__div__btn:
    "bg-teal-500 px-6 py-2 mt-[8rem] mb-8 font-semibold text-white rounded-full delay-500 duration-1000 scale-0 group-hover:scale-125",
  button:
    "bg-teal-500 px-6 py-2 mt-[8rem] mb-8 font-semibold text-white rounded-full delay-500 duration-1000 scale-0 group-hover:scale-125",
};


export default function Home() {
const [myData, setMyData] = createStore<any>();
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
let boo = false;
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setMyData(data);
 
  boo = true;
}

getData();








  return (
    <main class={styles.section}>
      <div class={styles.card__div}>
        <div class={styles.card__div__div}>
          <div class={styles.card__div__div__div}>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20081229142345%2Ffallout%2Fimages%2F2%2F2a%2FFallout2front.jpg&f=1&nofb=1"
              class="w-full h-full border-2"
              alt="fallout-logo"
            />
          </div>
          <div class={styles.cardBack}>
            <div class={styles.cardBack__div}>
            <h2 class="my-4 text-3xl font-semibold self-center">
                {myData && "Bitcoin Price Index"}
              </h2>
               
              {boo && <Table myData={myData} />}
              <button class={styles.button}>Last update:</button>
              <h2 class="text-sm font-semibold ">
                
              </h2>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
