import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import bg from "../assets/bg.png";
import {
  faCar,
  faCheckSquare,
  faClock,
  faHeadphonesSimple,
  faHomeAlt,
  faMobilePhone,
  faPhoneAlt,
  faShirt,
  faSleigh,
} from "@fortawesome/free-solid-svg-icons";
import { faCashApp } from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";
import { Tarifs } from "./Tarifs";
import { Chat } from "./Chat";
export function Home() {
  const [chatstate, setchatstate] = useState(false);
  const handleState = () => {
    setchatstate((c) => !c);
  };
  return (
    <>
      <div className=" lg:h-screen justify-between">
        <nav className=" bg-white flex justify-between w-full max-h-[11vh] text-3sm  px-2 py-4">
          <div
            className="pb-2"
            style={{
              fontFamily: "cursive",
            }}
          >
            Domugo
          </div>

          <div className="nav-items w-full pt-2 ">
            <ul className="flex w-full  justify-center text-center gap-4 text-gray-600">
              <li className="pb-2 cursor-pointer">Services</li>

              <li className="pb-2 cursor-pointer">A propos </li>

              <li className="pb-2 cursor-pointer">Contact </li>
            </ul>
          </div>
          <div className=" flex gap-4 ">
            <Link
              to={"/auth/register"}
              className="py-2 cursor-pointer  min-w-max text-gray-900  hover:text-blue-600   "
            >
              Se connecter
            </Link>
            <Link
              to={"auth/login"}
              className="py-2 cursor-pointer  min-w-max bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4   "
            >
              S'inscrire
            </Link>
          </div>
        </nav>
        <div
          className="header min-h-[55vh] text-white text-center justify-center "
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.455) ,  rgba(0, 0, 0, 0.455) ), url(${bg}) `,
            backgroundSize: "100% ",
          }}
        >
          <div className="text-6xl font-bold  pt-18">
            Vos services du quotidien,{" "}
            <strong className="text-blue-500"> en un seul clic</strong>
          </div>
          <div className="text-2xl  py-6">
            Entretien maison, livraisons et pressing - Simplifiez votre
            quotidien avec DomusGo
          </div>
          <br />
          <br />
          <Link
            to={"/services"}
            className=" no-underline bg-blue-700 px-10 m-auto py-5 rounded-lg cursor-pointer  max-w-max"
          >
            Commencer maintenant
          </Link>
        </div>
        <div className="text-center pt-10 pb-40">
          <div className="text-black text-5xl py-3 font-bold">Nos Services</div>
          <div className="text-gray-600 text-lg">
            Trois services essentiels pour simplifier votre vie quotidienne
          </div>
          <div className="flex flex-wrap px-10 mt-15">
            <div className="flex max-w-sm mx-5  rounded-2xl py-8 px-15 flex-col  shadow-lg gap-5 justify-center text-center bg-white ">
              <div className=" text-2xl p-4  rounded-lg text-white bg-blue-500 max-w-max m-auto ">
                <FontAwesomeIcon icon={faHomeAlt} />
              </div>
              <div className="text-black text-2xl font-bold">
                Entretien Maison
              </div>
              <div className="text-gray-600 ">
                Ménage, petits travaux, jardinage
              </div>
              <div className=" text-white bg-blue-500 px-10 m-auto py-3 rounded-lg cursor-pointer  max-w-max">
                Réserver maintenant
              </div>
            </div>
            <div className="flex max-w-sm mx-5  rounded-2xl py-8 px-15 flex-col  shadow-lg gap-5 justify-center text-center bg-white ">
              <div className=" text-2xl p-4  rounded-lg text-white bg-green-500 max-w-max m-auto ">
                <FontAwesomeIcon icon={faCar} />
              </div>
              <div className="text-black text-2xl font-bold">
                Entretien Maison
              </div>
              <div className="text-gray-600 ">
                Ménage, petits travaux, jardinage
              </div>
              <div className=" text-white bg-green-500 px-10 m-auto py-3 rounded-lg cursor-pointer  max-w-max">
                Réserver maintenant
              </div>
            </div>
            <div className="flex max-w-sm mx-5  rounded-2xl py-8 px-15 flex-col  shadow-lg gap-5 justify-center text-center bg-white ">
              <div className=" text-2xl p-4  rounded-lg text-white bg-violet-500 max-w-max m-auto ">
                <FontAwesomeIcon icon={faShirt} />
              </div>
              <div className="text-black text-2xl font-bold">
                Entretien Maison
              </div>
              <div className="text-gray-600 ">
                Ménage, petits travaux, jardinage
              </div>
              <div className=" text-white bg-violet-500 px-10 m-auto py-3 rounded-lg cursor-pointer  max-w-max">
                Réserver maintenant
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-10   bg-gray-50">
          <div className="text-black text-5xl py-3 font-bold">
            Comment ca marche ?
          </div>
          <div className="text-gray-600 text-lg">
            Simple, rapide et efficace en 3 étapes
          </div>
          <div className="flex flex-wrap w-full justify-center  mt-15">
            <div className="flex max-w-sm mx-5  rounded-2xl py-8 px-15 flex-col  gap-5 justify-center text-center  ">
              <div className=" text-2xl w-20  h-20 items-center flex justify-center    rounded-full text-blue-500 font-bold bg-blue-100  m-auto ">
                1
              </div>
              <div className="text-black text-lg font-bold">
                Choisissez votre service
              </div>
              <div className="text-gray-600 max-w-full ">
                Sélectionnez parmi nos trois services : entretien maison,
                livraison ou pressing
              </div>
            </div>
            <div className="flex max-w-sm mx-5  rounded-2xl py-8 px-15 flex-col  gap-5 justify-center text-center  ">
              <div className=" text-2xl w-20  h-20 items-center flex justify-center    rounded-full text-green-500 font-bold bg-green-100  m-auto ">
                2
              </div>
              <div className="text-black text-lg font-bold">
                Planifiez et payez
              </div>
              <div className="text-gray-600 max-w-full  ">
                Choisissez votre créneau, confirmez votre adresse et payez en
                toute sécurité
              </div>
            </div>
            <div className="flex max-w-sm  mx-5  rounded-2xl py-8 px-15 flex-col  gap-5 justify-center text-center  ">
              <div className=" text-2xl w-20  h-20 items-center flex justify-center    rounded-full text-violet-500 font-bold bg-violet-100  m-auto ">
                3
              </div>
              <div className="text-black text-lg font-bold">
                Profitez du service
              </div>
              <div className="text-gray-600  max-w-full ">
                Nos professionnels s'occupent de tout. Suivez l'avancement en
                temps réel
              </div>
            </div>
          </div>
        </div>
        <div className="text-center justify-center pt-10  bg-green-50">
          <div className="text-black text-5xl py-3 font-bold">
            Pourquoi choisir DomusGo ?
          </div>

          <div className="flex flex-wrap gap-2  mt-15 w-full justify-center">
            <div className="flex max-w-2xs   rounded-2xl py-8 px-15 flex-col  gap-5 justify-center text-center w-full  ">
              <div className=" text-2xl w-15  h-15 items-center flex justify-center    rounded-2xl text-blue-500 font-bold bg-blue-100  m-auto ">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="text-black text-lg font-bold">
                Disponible 7j/7
              </div>
              <div className="text-gray-600 max-w-full ">
                Services disponibles tous les jours
              </div>
            </div>
            <div className="flex max-w-2xs   rounded-2xl py-8 px-15 flex-col  gap-5 justify-center text-center  ">
              <div className=" text-2xl w-15  h-15 items-center flex justify-center    rounded-2xl text-green-500 font-bold bg-green-100  m-auto ">
                <FontAwesomeIcon icon={faCheckSquare} />
              </div>
              <div className="text-black text-lg font-bold">
                Planifiez et payez
              </div>
              <div className="text-gray-600 max-w-full  ">
                Tous nos prestataires sont certifiés
              </div>
            </div>
            <div className="flex max-w-2xs   rounded-2xl py-8 px-15 flex-col  gap-5 justify-center text-center  ">
              <div className=" text-2xl w-15  h-15 items-center flex justify-center    rounded-2xl text-violet-500 font-bold bg-violet-100  m-auto ">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className="text-black text-lg font-bold">
                Profitez du service
              </div>
              <div className="text-gray-600  max-w-full ">
                MTN, Moov, Orange Money
              </div>
            </div>
            <div className="flex max-w-2xs   rounded-2xl py-8 px-15 flex-col  gap-5 justify-center text-center  ">
              <div className=" text-2xl w-15  h-15 items-center flex justify-center    rounded-2xl text-violet-500 font-bold bg-violet-100  m-auto ">
                <FontAwesomeIcon icon={faHeadphonesSimple} />
              </div>
              <div className="text-black text-lg font-bold">Support 24h/24</div>
              <div className="text-gray-600  max-w-full ">
                Assistance client disponible
              </div>
            </div>
          </div>
        </div>
        <Tarifs />
        <div className="text-center justify-center pt-10 bg-blue-50">
          <div className="text-black text-5xl py-3 font-bold">
            Méthodes de paiement
          </div>
          <div className="text-gray-600 text-lg">Payez comme vous voulez</div>
          <div className="flex flex-wrap gap-6  my-15 w-full justify-center">
            <div className="flex max-w-2xs   rounded-2xl py-8 px-15 flex-col  gap-5 justify-center bg-white  shadow-lg text-center w-full  ">
              <div className=" text-2xl w-15  h-15 items-center flex justify-center    rounded-2xl text-blue-500 font-bold bg-blue-100  m-auto ">
                <FontAwesomeIcon icon={faMobilePhone} />
              </div>
              <div className="text-black text-lg font-bold">
                Disponible 7j/7
              </div>
              <div className="text-gray-600 max-w-full ">
                Services disponibles
              </div>
            </div>
            <div className="flex max-w-2xs   rounded-2xl py-8 px-15 flex-col  gap-5 justify-center bg-white  shadow-lg text-center  ">
              <div className=" text-2xl w-15  h-15 items-center flex justify-center    rounded-2xl text-green-500 font-bold bg-green-100  m-auto ">
                <FontAwesomeIcon icon={faMobilePhone} />
              </div>
              <div className="text-black text-lg font-bold">
                Planifiez et payez
              </div>
              <div className="text-gray-600 max-w-full  ">
                Tous nos prestataires
              </div>
            </div>
            <div className="flex max-w-2xs   rounded-2xl py-8 px-15 flex-col  gap-5 justify-center bg-white  shadow-lg text-center  ">
              <div className=" text-2xl w-15  h-15 items-center flex justify-center    rounded-2xl text-violet-500 font-bold bg-violet-100  m-auto ">
                <FontAwesomeIcon icon={faMobilePhone} />
              </div>
              <div className="text-black text-lg font-bold">
                Profitez du service
              </div>
              <div className="text-gray-600  max-w-full ">
                MTN, Moov, Orange
              </div>
            </div>
            <div className="flex max-w-2xs   rounded-2xl py-8 px-15 flex-col  gap-5 justify-center bg-white  shadow-lg text-center  ">
              <div className=" text-2xl w-15  h-15 items-center flex justify-center    rounded-2xl text-violet-500 font-bold bg-violet-100  m-auto ">
                <FontAwesomeIcon icon={faCashApp} />
              </div>
              <div className="text-black text-lg font-bold">Support 24h/24</div>
              <div className="text-gray-600  max-w-full ">
                Assistance client
              </div>
            </div>
          </div>
        </div>
        <div className="header min-h-[55vh]  text-white text-center justify-center bg-blue-600">
          <div className="text-6xl font-bold  pt-18">
            Prêt à simplifier votre quotidien ?
          </div>
          <div className="text-2xl  py-6">
            Rejoignez des milliers d'utilisateurs qui font confiance à DomusGo
          </div>
          <div className="flex gap-3 justify-center">
            <div className="bg-white text-blue-500  px-10   py-5 rounded-lg cursor-pointer  max-w-max">
              Télécharger l'app
            </div>
            <div className=" border-2 hover:bg-white  hover:text-blue-500   border-white px-10  py-5 rounded-lg cursor-pointer  max-w-max">
              Commencer sur le web
            </div>
          </div>
        </div>
        {chatstate && <Chat handleState = {handleState} />}
        {!chatstate && (
          <button
            onClick={handleState}
            id="chat-toggle"
            className="fixed right-10 bottom-10 bg-black  text-white px-13 py-4 cursor-pointer rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <i className="ri-chat-3-line text-2xl"></i> Discuter avec l'IA
          </button>
        )}
        <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 font-pacifico">
                  DomusGo
                </h3>
                <p className="text-gray-400 mb-4">
                  Vos services du quotidien, en un seul clic
                </p>
                <div className="flex space-x-4">
                  <span className="ri-facebook-fill text-2xl text-gray-400 hover:text-white cursor-pointer"></span>
                  <span className="ri-twitter-fill text-2xl text-gray-400 hover:text-white cursor-pointer"></span>
                  <span className="ri-instagram-line text-2xl text-gray-400 hover:text-white cursor-pointer"></span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer">
                      Entretien Maison
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer">
                      Livraison
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer">
                      Pressing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer">
                      Centre d'aide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Légal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer">
                      Conditions d'utilisation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer">
                      Politique de confidentialité
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer">
                      Mentions légales
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2024 DomusGo. Tous droits réservés.
              </p>
              <a
                href="https://readdy.ai/?origin=logo"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
