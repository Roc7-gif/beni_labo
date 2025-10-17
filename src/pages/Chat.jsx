import {
  faClose,
  faEnvelope,
  faHeadphones,
  faMessage,
  faMicrophone,
  faPaperPlane,
  faPlane,
  faRefresh,
  faUser,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Chat({handleState}) {
  return (
    <>
      <div className="fixed bottom-0 right-6 z-50">
        <div
          id="chat-window"
          className="flex w-100 h-130 bg-white rounded-lg shadow-xl  flex-col absolute bottom-8 right-0 border border-gray-200"
        >
          <div className=" border-b-1 border-gray-50 shadow-gray-500 shadow-xs p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 text-teal-400 rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  className="text-3xl cursor-pointer"
                  icon={faHeadphones}
                />
              </div>
              <div>
                <div className="font-medium">Talk with Us</div>
                <div className="text-gray-500 text-sm">
                  Choose voice or text
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full  flex items-center justify-center transition-colors">
                <FontAwesomeIcon
                  className="text-xs cursor-pointer"
                  icon={faRefresh}
                />
              </button>
                          <button
                              onClick={handleState}
                id="chat-close"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                <FontAwesomeIcon
                  className="text-xs cursor-pointer"
                  icon={faClose}
                />
                <i className="ri-close-line"></i>
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto ">
            {/* <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-3-line text-teal-600 text-sm"></i>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-gray-700 text-sm">
                    Bonjour ! Je suis l'assistant DomusGo. Comment puis-je vous
                    aider aujourd'hui ?
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 justify-end">
                <div className="bg-teal-500 p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-white text-sm">
                    Je souhaite réserver un service de nettoyage
                  </p>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-line text-gray-600 text-sm"></i>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-3-line text-teal-600 text-sm"></i>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-gray-700 text-sm">
                    Excellent choix ! Quel type de nettoyage souhaitez-vous ?
                  </p>
                </div>
              </div>
            </div> */}
            <div className="text-center justify-center flex flex-col gap-2 h-[100%] w-[100%]  ">
              <div className="bg-gray-50 p-4 rounded-full max-w-max mx-auto max-h-max">
                <FontAwesomeIcon
                  className="text-3xl text-gray-500 cursor-pointer"
                  icon={faMessage}
                />
              </div>
              <div className="text-gray-500 text-xl mx-auto">
                Use voice or text to communicate
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />

              <button className="bg-teal-500 hover:bg-teal-600 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <FontAwesomeIcon
                  className="text-xl cursor-pointer"
                  icon={faPaperPlane}
                />
              </button>
              <button className="bg-teal-500 hover:bg-teal-600 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <FontAwesomeIcon
                  className="text-xl cursor-pointer"
                  icon={faMicrophone}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
