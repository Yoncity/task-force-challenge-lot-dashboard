import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import "./index.scss";
import Layout from "../../components/common/Layout";
const data = [
  { name: "text", uv: 0, pv: 0, amt: 0 },
  { name: "text", uv: 10, pv: 15, amt: 15 },
  // { name: "text", uv: 18, pv: 21, amt: 21 },
  // { name: "text", uv: 30, pv: 46, amt: 46 },
  { name: "text", uv: 60, pv: 5, amt: 5 },
  // { name: "text", uv: 80, pv: 51, amt: 51 },
  // { name: "text", uv: 70, pv: 45, amt: 45 },
  { name: "text", uv: 34, pv: 75, amt: 75 },
  // { name: "text", uv: 54, pv: 49, amt: 49 },
  { name: "text", uv: 65, pv: 65, amt: 65 },
  { name: "text", uv: 30, pv: 11, amt: 11 },
  // { name: "text", uv: 44, pv: 51, amt: 51 },
  // { name: "text", uv: 23, pv: 6, amt: 6 },
  // { name: "text", uv: 40, pv: 62, amt: 62 },
  // { name: "text", uv: 60, pv: 76, amt: 76 },
  { name: "text", uv: 4, pv: 71, amt: 71 },
  { name: "text", uv: 21, pv: 12, amt: 12 },
  { name: "text", uv: 74, pv: 3, amt: 3 },
  { name: "text", uv: 48, pv: 20, amt: 20 },
  { name: "text", uv: 32, pv: 6, amt: 6 },
  { name: "text", uv: 0, pv: 0, amt: 6 },
];
const Home = () => {
  return (
    <Layout activeMenu="Home" headerTitle="Overview">
      <div className="home_container">
        <p className="home_container__title typography_title_h3 euclid_regular">
          Welcome to <span className="euclid_medium">Lot,</span>
        </p>
        <div className="home_container__graph">
          <p className="typography_content_large gray_text_9 poppin_medium">
            Success Map
          </p>
          <LineChart width={700} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#1FC933"
              strokeWidth="3"
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              strokeWidth="3"
            />
          </LineChart>
        </div>

        <div className="home_container__summary">
          <div className="home_container__summary__card background_primary white_text">
            <div className="home_container__summary__card__title typography_content_medium euclid_bold">
              EMPLOYERS
            </div>
            <div className="home_container__summary__card__value typography_title_h1 montserrat_medium secondary_text">
              36
            </div>
            <div className="home_container__summary__card__description white_text typography_content_xs euclid_regular">
              Employers finds their employees through us
            </div>
          </div>

          <div className="home_container__summary__card background_primary white_text">
            <div className="home_container__summary__card__title typography_content_medium euclid_bold">
              JOBS
            </div>
            <div className="home_container__summary__card__value typography_title_h1 secondary_text montserrat_medium">
              3,690
            </div>
            <div className="home_container__summary__card__description white_text typography_content_xs euclid_regular">
              Employers finds their employees through us
            </div>
          </div>

          <div className="home_container__summary__card background_primary white_text">
            <div className="home_container__summary__card__title typography_content_medium euclid_bold">
              ONGOING PROJECTS
            </div>
            <div className="home_container__summary__card__value typography_title_h1 secondary_text montserrat_medium">
              36
            </div>
            <div className="home_container__summary__card__description white_text typography_content_xs euclid_regular">
              Employers finds their employees through us
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
