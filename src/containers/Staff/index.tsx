import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import './index.scss';
import Layout from '../../components/common/Layout';
import mtn from '../../assets/icons/mtn_round.png';
import ME from '../../assets/images/ME.jpg';
import bk from '../../assets/icons/bk.png';
import kcb from '../../assets/icons/kcb.png';
import equity from '../../assets/icons/equity-bank-logo.png';
import userProfileIcon from '../../assets/icons/user_profile.svg';
import camera from '../../assets/icons/camera.svg';
import edit from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import Modal from '../../components/common/Modal';

const Staff = () => {
  const [tab, setTab] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const employers = () => {
    return (
      <>
        <div className="staff_container__body__card card">
          <img src={mtn} alt="" className="staff_container__body__card__icon" />
          <p className="staff_container__body__card__title black_text_3 poppin_medium typography_content_medium">
            MTN Rwanda
          </p>

          <div className="staff_container__body__card__rating">
            <ReactStars count={5} size={24} activeColor="#ffd700" />
          </div>

          <p className="staff_container__body__card__rate_button poppin_semi_bold typography_content_large_3 primary_text">
            Rate
          </p>
          <div className="staff_container__body__card__actions">
            <img
              src={edit}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
            <img
              src={deleteIcon}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
          </div>
        </div>

        <div className="staff_container__body__card card">
          <img src={bk} alt="" className="staff_container__body__card__icon" />
          <p className="staff_container__body__card__title black_text_3 poppin_medium typography_content_medium">
            Bank of kigali
          </p>

          <div className="staff_container__body__card__rating">
            <ReactStars count={5} size={24} activeColor="#ffd700" />
          </div>

          <p className="staff_container__body__card__rate_button poppin_semi_bold typography_content_large_3 primary_text">
            Rate
          </p>
          <div className="staff_container__body__card__actions">
            <img
              src={edit}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
            <img
              src={deleteIcon}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
          </div>
        </div>

        <div className="staff_container__body__card card">
          <img src={kcb} alt="" className="staff_container__body__card__icon" />
          <p className="staff_container__body__card__title black_text_3 poppin_medium typography_content_medium">
            KCB Bank
          </p>

          <div className="staff_container__body__card__rating">
            <ReactStars count={5} size={24} activeColor="#ffd700" />
          </div>

          <p className="staff_container__body__card__rate_button poppin_semi_bold typography_content_large_3 primary_text">
            Rate
          </p>
          <div className="staff_container__body__card__actions">
            <img
              src={edit}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
            <img
              src={deleteIcon}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
          </div>
        </div>

        <div className="staff_container__body__card card">
          <img
            src={equity}
            alt=""
            className="staff_container__body__card__icon"
          />
          <p className="staff_container__body__card__title black_text_3 poppin_medium typography_content_medium">
            Equity Rwanda
          </p>

          <div className="staff_container__body__card__rating">
            <ReactStars count={5} size={24} activeColor="#ffd700" />
          </div>

          <p className="staff_container__body__card__rate_button poppin_semi_bold typography_content_large_3 primary_text">
            Rate
          </p>
          <div className="staff_container__body__card__actions">
            <img
              src={edit}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
            <img
              src={deleteIcon}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
          </div>
        </div>
      </>
    );
  };

  const employees = () => {
    return (
      <>
        <div className="staff_container__body__card card">
          <img src={ME} alt="" className="staff_container__body__card__icon" />
          <p className="staff_container__body__card__title black_text_3 poppin_medium typography_content_medium">
            Kamikazi Lilian
          </p>

          <p className="staff_container__body__card__rate_button_employee poppin_semi_bold typography_content_large_3 primary_text">
            Rate
          </p>
          <div className="staff_container__body__card__actions">
            <img
              src={edit}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
            <img
              src={deleteIcon}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
          </div>
        </div>
        <div className="staff_container__body__card card">
          <img src={ME} alt="" className="staff_container__body__card__icon" />
          <p className="staff_container__body__card__title black_text_3 poppin_medium typography_content_medium">
            Kamikazi Lilian
          </p>

          <p className="staff_container__body__card__rate_button_employee poppin_semi_bold typography_content_large_3 primary_text">
            Rate
          </p>
          <div className="staff_container__body__card__actions">
            <img
              src={edit}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
            <img
              src={deleteIcon}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
          </div>
        </div>
        <div className="staff_container__body__card card">
          <img src={ME} alt="" className="staff_container__body__card__icon" />
          <p className="staff_container__body__card__title black_text_3 poppin_medium typography_content_medium">
            Kamikazi Lilian
          </p>

          <p className="staff_container__body__card__rate_button_employee poppin_semi_bold typography_content_large_3 primary_text">
            Rate
          </p>
          <div className="staff_container__body__card__actions">
            <img
              src={edit}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
            <img
              src={deleteIcon}
              alt=""
              className="staff_container__body__card__actions__icon"
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <Layout activeMenu="Staffs" headerTitle="Staffs">
      <div className="staff_container">
        <div className="staff_container__header">
          <div className="staff_container__header__tabs">
            <p
              onClick={() => setTab(0)}
              className={`typography_content_medium_2 poppin_medium primary_text_1 ${
                tab === 0 ? 'background_white' : ''
              }`}
            >
              Employers
            </p>
            <p
              onClick={() => setTab(1)}
              className={`typography_content_medium_2 poppin_medium primary_text_1 ${
                tab === 1 ? 'background_white' : ''
              }`}
            >
              Employees
            </p>
          </div>
          <div
            className="staff_container__header__add_employee button_filled smaller poppin_semi_bold white_text"
            onClick={() => setShowModal(true)}
          >
            ADD
          </div>
        </div>
        <div className="staff_container__body">
          {tab === 0 ? employers() : employees()}
        </div>
      </div>

      <Modal
        header="Add Company"
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <div className="modal">
          <div className="add_employee_image_container">
            <img
              src={userProfileIcon}
              alt="User Profile Avatar"
              className="employee_image"
            />
            <img
              src={camera}
              alt="Button for adding new profile"
              className="add_image"
            />
          </div>

          <input
            type="text"
            placeholder="Name of the company"
            className="poppin_regular"
          />
          <select className="poppin_regular">
            <option>Size of the company</option>
            <option>Small company (10 - 100)</option>
            <option>Medium company (100 - 1000)</option>
          </select>
          <div className="button_filled larger euclid_semi_bold white_text action_button">
            ADD
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Staff;
