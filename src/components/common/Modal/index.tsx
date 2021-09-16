import { useEffect, useRef } from "react";
import "./index.scss";
type Props = {
  header: string;
  children: any;
  footer?: string;
  showModal: boolean;
  setShowModal: (a: boolean) => void;
};
const Modal: React.FC<Props> = ({
  header,
  children,
  footer,
  showModal,
  setShowModal,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("Ola");
        setShowModal(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShowModal]);

  const body = () => {
    return (
      <div className="modal-main-container">
        <div className="modal-container" ref={ref}>
          <div className="modal-header-container">
            <p className="modal-header-title typography_content_large_2 primary_text">
              {header}
            </p>
            <span
              className="modal-header-close-button"
              onClick={() => setShowModal(!showModal)}
            >
              &times;
            </span>
          </div>
          <div className="modal-body-container">{children}</div>
          {footer && (
            <div className="modal-footer-container">
              <p className="modal-footer-text">{footer}</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  return showModal ? body() : null;
};

export default Modal;
