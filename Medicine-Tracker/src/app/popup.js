export default function Popup({
  canShowMethod,
  HidePopup,
  GetInitialValues,
  NewValues,
}) {
  let InitialValues = GetInitialValues();
  /*medName
  morningAmount
  nightAmount
  Total */
  console.log(InitialValues.medName);
  if (canShowMethod()) {
    return (
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/*=======================
                 This is our ! symbol, surrounded by a circle
                 =============================*/}
                  <div className="mx-auto flex size-12 grow-0 flex-wrap items-end justify-items-end rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <div className="text-center size-8 text-red-600">!</div>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold text-gray-900"
                      id="modal-title"
                    >
                      Your Medicine Information
                    </h3>
                    {/*=======================
                 Modal text starts here
                 =============================*/}
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Heres what you put initially:
                      </p>
                      <ul className="text-sm text-gray-700">
                        <li>
                          The medicine name is:
                          <strong> {InitialValues.medName}</strong>
                        </li>
                        <li>
                          You have <strong>{InitialValues.Total}</strong> pill's
                          total
                        </li>
                        <li>
                          You take{" "}
                          <strong>{InitialValues.morningAmount}</strong> pills
                          each morning
                        </li>
                        <li>
                          You take <strong>{InitialValues.nightAmount}</strong>{" "}
                          pills each night
                        </li>
                      </ul>
                      <br></br>
                      <p className="text-sm text-green-800">
                        The calculation before you run out of medicine:
                      </p>
                      <ul className="text-sm text-green-700">
                        <li>
                          The medicine name is:{" "}
                          <strong>{InitialValues.medName}</strong>
                        </li>
                        <li>
                          You have <strong>...</strong> pill's remaining.
                        </li>
                        <li>
                          You get <strong>...</strong> morning dosages by the
                          time you run out of pills.
                        </li>
                        <li>
                          You get <strong>...</strong> night dosages by the time
                          you run out of pills.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*===========================================
              This is our buttons, notepad and Cancel for now
          ================================================*/}
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={HidePopup}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Notepad
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Used from:
//https://tailwindui.com/components/application-ui/overlays/modal-dialogs
