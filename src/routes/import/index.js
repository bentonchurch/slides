import { TabManager } from '../../util/tab/index.js';
import { Page } from "../../components/Page.js";
import { useRef, useState } from "react";

// https://tabs.ultimate-guitar.com/tab/misc-musicals/hamilton-youll-be-back-chords-1772610

/**
 * Determines wheather the url is a valid Ultimate Guitar url
 * @param {string} url The url for the Ultimate Guitar tab
 * @returns The validity of the url
 */
const validateUrl = (url) => {
  const urlRegex = /https:\/\/tabs\.ultimate-guitar\.com\/tab\/.*\/.*[0-9]*/i;
  const isValid = urlRegex.test(url);

  return isValid;
}

function ImportPage() {
  const tabUrlTextbox = useRef();
  const [tabImportError, setTabImportError] = useState(undefined);
  const [isLoadingTab, setIsLoadingTab] = useState(false);
  const [currentTab, setCurrentTab] = useState(undefined);

  const submitUrl = async () => {
    const tabUrl = tabUrlTextbox.current.value.trim().toLowerCase();
    const isValid = validateUrl(tabUrl);
    let tab;

    // If the url is invalid, give the user an error
    if (!isValid) {
      setTabImportError("Please enter a valid Ultimate Guitar url.");
      return;
    }

    // If the url is valid, begin loading the tab
    setIsLoadingTab(true);

    try {
      tab = await TabManager.loadFromUrl(tabUrl);
      setCurrentTab(tab);

      // if (TabManager.get(tab.id)) {
      //   unhideElement(tabImportedAlreadyWarning);
      // }
    } catch (e) {
      setTabImportError("We could not load that tab.  Please try again.")
    }

    setIsLoadingTab(false);

    console.log(tab);
  };

  return (
    <Page>
      <div className="flex-col align-center">

        {/* Group 1: Tab url UI */}
        {!currentTab && <>
          <h1>Import</h1>

          <div className="flex-row">
            <input className="full-width" type="text" placeholder="Enter a URL to import" spellcheck="false" autocomplete="off" ref={tabUrlTextbox}></input>
            <button className="icon-button" onClick={submitUrl}>
              <span className="material-icons-round">arrow_forward</span>
            </button>
          </div>
  
          {tabImportError && (
            <p className="error-message">
              <span className="material-icons-round">error_outline</span>
              <span>{tabImportError}</span>
            </p>
          )}
  
          {isLoadingTab && <span className="spinner"></span>}
        </>}

        {/* Group 2: Tab metadata */}
        {currentTab && <>
          <h1>
            {currentTab && <a href={currentTab.url} target="blank">{currentTab.name}</a>}
            {currentTab && <span>{`#${currentTab.id}`}</span>}
          </h1>
          <p>
            {currentTab && <span>Artist: <a href={currentTab.artistUrl} target="blank">{currentTab.artist}</a></span>}
            {currentTab && <span>Uploader: <a href={currentTab.uploaderUrl} target="blank">{currentTab.uploader}</a></span>}
          </p>
          <span id="reimporting-song-warning" class="toast warning hidden">
            <span class="material-icons-outlined"></span>
            <span>Warning - you've already imported this tab!  By saving this version, you will overwrite any previously existing versions of the tab.</span>
          </span>
        </>}
      </div>
    </Page>
  );
}

export { ImportPage };
