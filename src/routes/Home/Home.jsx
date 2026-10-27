import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";
import Hoodie from "#assets/hoodie.webp";

function Home() {
  return (
    <main>
      <div>
        <p>Goods for the people who build the future</p>
        <h1>Wear your source code</h1>
        <p>
          Thoughtfully made merch for developers, designers, and everyone who
          turns ideas into shipped products.
        </p>
        <NavLink
          to="/
        store"
        >
          Shop the merch
        </NavLink>
        <ArrowRight />
      </div>
      <div>
        <img
          src={Hoodie}
          alt=""
        />
      </div>

      <div>
        <div>
          <p>Made to stay.</p>
          <p>Thoughtful materials, timeless forms, no unnecessary noise.</p>
        </div>

        <div>
          <p>Small batches.</p>
          <p>Produced with care by independent makers we know by name.</p>
        </div>

        <div>
          <p>Feel good, too. </p>
          <p>
            Free shipping on orders over $100, always packed with intention.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
