import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { homeData } from "@/components/data/data";
import { homedir } from "os";
import Image from "next/image";
import {
  Bootstrap,
  Css,
  Docker,
  Figma,
  Git,
  Html,
  Intellij,
  Java,
  Javascript,
  Mongodb,
  Next,
  Node,
  Python,
  ReactLogo,
  Sass,
  Tailwind,
  Trello,
  Typescript,
  Vsc,
} from "../../app/icons";
function Page() {
  return (
    <main className="flex flex-col items-center bg-background">
      {/* sekcja 1 do HOME */}
      <section className="flex flex-row w-10/12 mt-10 mb-6 items-center">
        <div>
          <h2> {homeData.title}</h2>
          <p> {homeData.body}</p>
        </div>
      </section>

      {/* sekcja 2 do ABOUT */}
      <section className="flex flex-row w-10/12 mt-10 mb-6 items-center">
      <div className="w-1/3">
          <Image
            width={640}
            height={960}
            aria-aria-label={"Photo of me"}
            alt={"Photo of me"}
            src={"/images/photo.jpeg"}
            priority={false}
            className="photo"
          />
        </div>
        <div className="w-1/3">
          <p> {homeData.body}</p> {/* dopisac kolejny key w data!!!!!! */}
        </div>
          <div className="flex flex-wrap w-1/3">
          <h2>{homeData.stack}</h2>
            <Bootstrap />
            <Css />
            <Docker />
            <Figma />
            <Git />
            <Html />
            <Intellij />
            <Java />
            <Javascript />
            <Next />
            <Mongodb />
            <Node />
            <Python />
            <ReactLogo />
            <Sass />
            <Tailwind />
            <Trello />
            <Typescript />
            <Vsc />
          </div>
      </section>
      {/* sekcja 2 do PROJECTS */}
      <section>
        <div>
          <h2>{homeData.projects}</h2>
        </div>
        <div>
        <h2>Tutaj przemapowac po komponencie z thumbnailem projektu</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit hic, aut animi sequi porro consectetur explicabo quibusdam aliquid ducimus. Architecto voluptatum voluptates ipsum dolorem? Possimus culpa unde soluta veritatis voluptatum dolorum velit fuga. Pariatur deleniti necessitatibus facere saepe a harum, ipsa quo, modi deserunt amet repellat quam ullam! Laboriosam aspernatur esse dolores, soluta facere consequuntur. Illum possimus voluptate, quibusdam veritatis corporis exercitationem pariatur maiores atque! Eius dolorum corrupti tempora quisquam enim laboriosam cumque praesentium, tempore iste id saepe labore non, soluta animi quasi esse consequuntur! Exercitationem voluptatum quibusdam consequuntur optio? Ex dolores provident perspiciatis numquam, iure deleniti quae quibusdam culpa nulla id, totam vero repellat. Expedita dicta tempora similique? Nulla necessitatibus ipsa ipsum? Nam perspiciatis corporis quidem praesentium nobis saepe, maxime necessitatibus sunt quis? Vel cupiditate fugit neque accusamus, accusantium soluta cumque, praesentium totam dignissimos temporibus saepe culpa. Vel incidunt sed corrupti nemo consectetur doloremque libero id molestias natus maxime ad modi voluptatum aspernatur temporibus quia mollitia, eos laudantium, cum fugiat nihil placeat. Animi sequi, nulla officiis reiciendis dolor impedit reprehenderit voluptate commodi ad sint eaque numquam mollitia asperiores ab incidunt et. Ad distinctio quas fuga, dolorem molestias maxime cupiditate, illo voluptatem explicabo autem nulla sequi adipisci in, nostrum aspernatur aperiam! Repudiandae numquam odio nihil dolores hic blanditiis iure culpa nobis doloremque eveniet! Velit porro magnam adipisci saepe pariatur sit neque doloribus, beatae nihil quod a, laboriosam, totam voluptatem eius earum quaerat eaque ex minima incidunt vitae sint temporibus. Corporis laboriosam non quis repellendus? Omnis eius molestiae dolor laboriosam nulla assumenda soluta corporis tempora dolore! Est iusto rerum voluptas ullam, expedita consequatur ducimus provident ea consectetur sapiente, asperiores dolore commodi facilis ex, dignissimos eveniet. Sunt veniam mollitia voluptatibus, animi consectetur qui officiis maxime, deleniti rerum ipsa dolorum dignissimos, eaque rem aut possimus molestias doloribus natus a quis laborum consequuntur molestiae! Velit itaque nostrum distinctio nobis sit accusamus dignissimos doloremque quae doloribus temporibus quos quis, laudantium consequatur in sint saepe dicta. Et, quas! Sequi esse ad veritatis commodi? Eveniet, repudiandae? Quidem repellendus quas dicta earum quae! Facere tenetur obcaecati, magnam et vel, mollitia consequuntur accusamus assumenda labore incidunt doloremque inventore iure quaerat sit, ipsam molestiae quod? Quae animi beatae atque modi magni harum voluptates, esse natus! Eos iste animi distinctio nihil placeat magni eveniet. Assumenda quam non doloribus, excepturi quis architecto ipsam voluptate nam vero suscipit? Tempora earum nemo quisquam facere velit deserunt porro, ipsum expedita, voluptas ea eveniet! Unde consequuntur aliquam cumque. Amet molestias in, laudantium repellendus officiis ducimus laborum similique aliquid numquam eius praesentium asperiores minima illum illo sapiente corrupti cupiditate voluptatem magnam, voluptatibus blanditiis eligendi, doloremque necessitatibus unde? Vitae suscipit quo veniam quibusdam minima corrupti, ipsum dignissimos tempora assumenda! Vitae qui, dolorum incidunt quisquam nisi nam ipsa saepe reiciendis laudantium atque. Voluptas, magnam blanditiis? Officia porro tempora sapiente. Rem expedita facilis impedit itaque aspernatur dolore, officia officiis. Possimus, sunt? Inventore distinctio laudantium, eligendi sequi error repellat iure ipsam mollitia veniam accusantium voluptatibus vel, itaque, rerum amet. Sequi nemo nulla vitae tempore esse. Veniam corrupti alias magnam rerum porro iste id natus, repudiandae totam accusantium in quasi laborum magni cum numquam nesciunt ullam saepe sequi ratione nemo libero sunt aperiam incidunt. Eaque dolore repudiandae nesciunt quisquam quis tenetur perspiciatis deserunt assumenda eum ex quae dolorum et qui, nam nemo veritatis est quas esse nihil quaerat quod quo. Consequatur cumque laborum ipsam, consectetur omnis rerum provident, natus a unde reiciendis accusamus, neque quisquam laboriosam quas cum similique ullam id sed error minus maxime officiis! Ipsam molestiae incidunt, aliquam quos voluptatibus aperiam numquam laudantium voluptatem iure optio delectus modi impedit deleniti voluptatum perferendis vel ratione nisi placeat! Temporibus, fuga facere. Ducimus tempora explicabo et esse cumque error totam eius culpa reiciendis ea suscipit fugit repudiandae praesentium, in provident mollitia, ipsa iste ut, sunt tempore nulla. Nihil dolorem doloremque eum. Pariatur, temporibus. Non culpa eius eveniet id accusantium dignissimos fuga velit perferendis enim incidunt? Minima ipsam dignissimos consectetur dolores? Dolor nobis minima dicta illum excepturi, ullam eligendi, mollitia odio repellendus recusandae vero obcaecati. Eos vitae suscipit inventore laboriosam beatae dolore, fugit rem commodi odio non! Reiciendis praesentium, hic, quis vero quae sapiente est earum aliquid nostrum ipsum, veniam culpa molestiae rerum accusantium corrupti temporibus deleniti harum! Et eos veritatis, nisi excepturi tempore voluptas tenetur! Facilis officiis asperiores laboriosam dolore magni adipisci quod nihil eaque. Dolores laborum nulla itaque quibusdam nemo excepturi tempora explicabo labore ipsum error libero suscipit, reprehenderit iure eos cum dolorem amet mollitia adipisci. Ratione, ullam nihil perferendis atque aperiam eos odit laborum ducimus nesciunt dignissimos, distinctio nulla soluta, dolores fugit cum doloremque tempore expedita. Quibusdam deleniti inventore unde, quod consequuntur laboriosam ex! Unde earum possimus aliquam sapiente minus optio enim minima tenetur, veritatis quas aperiam temporibus omnis obcaecati officiis quasi amet repellendus maxime quae? Minima porro et temporibus sed! Labore, aspernatur deleniti optio dolores est consequuntur laborum ducimus quo!</p>
        </div> {/* stworzyc komponent thumbnaila */}
      </section>
    </main>
  );
}

export default Page;
