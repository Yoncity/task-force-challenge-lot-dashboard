import "./index.scss";
import Layout from "../../components/common/Layout";
import settings from "../../assets/icons/settings.svg";

const Report = () => {
  return (
    <Layout activeMenu="Reports" headerTitle="Reports">
      <div className="report_container">
        <div className="report_container__header">
          <p className="report_container__header__title typography_title_h3">
            Students rate
          </p>
          <div className="report_container__header__date_range">
            <div className="report_container__header__date_range__range">
              <label
                htmlFor="fromDate"
                className="typography_content_xxs primary_text"
              >
                From
              </label>
              <input type="date" />
            </div>

            <div className="report_container__header__date_range__range">
              <label
                htmlFor="fromDate"
                className="typography_content_xxs primary_text"
              >
                To
              </label>
              <input type="date" />
            </div>
          </div>
        </div>

        <div className="report_container__body">
          <table cellPadding="15" cellSpacing="0">
            <tr>
              <th className="background_gray_8 primary_text typography_content_xxs">
                STUDENTS
              </th>
              <th className="background_gray_8 primary_text typography_content_xxs">
                COMPANIES
              </th>
              <th className="background_gray_8 primary_text typography_content_xxs">
                DATE JOINED
              </th>
              <th className="background_gray_8 primary_text typography_content_xxs">
                SERVICE FEE
              </th>
            </tr>

            <tr>
              <td className="id_and_name">
                <div>
                  <p className="row_id typography_content_xxs">1</p>
                </div>
                <div className="row_name_and_email">
                  <p className="row_name primary_text typography_content_xxs primary_text_3">
                    Kamikazi Lilian
                  </p>
                  <p className="row_email primary_text typography_content_xxss primary_text_2">
                    kamikaziLili@gmail.com
                  </p>
                </div>
              </td>

              <td className="company_info">
                <img src={settings} alt="" className="row_image" />
                <p className="row_company_name typography_content_xxs primary_text">
                  MTN Rwanda
                </p>
              </td>

              <td>
                <p className="row_date_joined typography_content_xxs primary_text_2">
                  1st JUNE 2021
                </p>
              </td>

              <td>
                <p className="row_service_fee typography_content_xxs primary_text">
                  PAID
                </p>
              </td>
            </tr>

            <tr>
              <td className="id_and_name">
                <div>
                  <p className="row_id typography_content_xxs">1</p>
                </div>
                <div className="row_name_and_email">
                  <p className="row_name primary_text typography_content_xxs primary_text_3">
                    Kamikazi Lilian
                  </p>
                  <p className="row_email primary_text typography_content_xxss primary_text_2">
                    kamikaziLili@gmail.com
                  </p>
                </div>
              </td>

              <td className="company_info">
                <img src={settings} alt="" className="row_image" />
                <p className="row_company_name typography_content_xxs primary_text">
                  MTN Rwanda
                </p>
              </td>

              <td>
                <p className="row_date_joined typography_content_xxs primary_text_2">
                  1st JUNE 2021
                </p>
              </td>

              <td>
                <p className="row_service_fee typography_content_xxs primary_text">
                  PAID
                </p>
              </td>
            </tr>

            <tr>
              <td className="id_and_name">
                <div>
                  <p className="row_id typography_content_xxs">1</p>
                </div>
                <div className="row_name_and_email">
                  <p className="row_name primary_text typography_content_xxs primary_text_3">
                    Kamikazi Lilian
                  </p>
                  <p className="row_email primary_text typography_content_xxss primary_text_2">
                    kamikaziLili@gmail.com
                  </p>
                </div>
              </td>

              <td className="company_info">
                <img src={settings} alt="" className="row_image" />
                <p className="row_company_name typography_content_xxs primary_text">
                  MTN Rwanda
                </p>
              </td>

              <td>
                <p className="row_date_joined typography_content_xxs primary_text_2">
                  1st JUNE 2021
                </p>
              </td>

              <td>
                <p className="row_service_fee typography_content_xxs primary_text">
                  PAID
                </p>
              </td>
            </tr>

            <tr>
              <td className="id_and_name">
                <div>
                  <p className="row_id typography_content_xxs">1</p>
                </div>
                <div className="row_name_and_email">
                  <p className="row_name primary_text typography_content_xxs primary_text_3">
                    Kamikazi Lilian
                  </p>
                  <p className="row_email primary_text typography_content_xxss primary_text_2">
                    kamikaziLili@gmail.com
                  </p>
                </div>
              </td>

              <td className="company_info">
                <img src={settings} alt="" className="row_image" />
                <p className="row_company_name typography_content_xxs primary_text">
                  MTN Rwanda
                </p>
              </td>

              <td>
                <p className="row_date_joined typography_content_xxs primary_text_2">
                  1st JUNE 2021
                </p>
              </td>

              <td>
                <p className="row_service_fee typography_content_xxs primary_text">
                  PAID
                </p>
              </td>
            </tr>

            <tr>
              <td className="id_and_name">
                <div>
                  <p className="row_id typography_content_xxs">1</p>
                </div>
                <div className="row_name_and_email">
                  <p className="row_name primary_text typography_content_xxs primary_text_3">
                    Kamikazi Lilian
                  </p>
                  <p className="row_email primary_text typography_content_xxss primary_text_2">
                    kamikaziLili@gmail.com
                  </p>
                </div>
              </td>

              <td className="company_info">
                <img src={settings} alt="" className="row_image" />
                <p className="row_company_name typography_content_xxs primary_text">
                  MTN Rwanda
                </p>
              </td>

              <td>
                <p className="row_date_joined typography_content_xxs primary_text_2">
                  1st JUNE 2021
                </p>
              </td>

              <td>
                <p className="row_service_fee typography_content_xxs primary_text">
                  PAID
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
