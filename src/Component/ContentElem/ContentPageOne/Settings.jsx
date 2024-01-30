import "./Setting.css";

const SettingItem = ({ settingPropertie, onToggle, onColor, onRange }) => {
  return (
    <div className="row row-cols-2 g-2">
      {settingPropertie.map((propertie) => (
        <>
          <div className="col" key={propertie.id}>
            <div className="p-3">
              {propertie.title}{" "}
              {propertie.type === "color" && (
                <label class="form-label">{propertie.colorLine}</label>
              )}
              {propertie.type === "range" && (
                <label class="form-label">{propertie.value}</label>
              )}
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              {propertie.type === "checkbox" && (
                <div className="form-check form-switch">
                  <input
                    className={propertie.className}
                    type={propertie.type}
                    id="flexSwitchCheckDefault"
                    checked={propertie.active}
                    onChange={(e) => {
                      onToggle(propertie.id, e.target.checked);
                    }}
                  ></input>
                </div>
              )}
              {propertie.type === "color" && (
                <input
                  type="color"
                  class="form-control form-control-color"
                  id="exampleColorInput"
                  value={propertie.colorLine}
                  title="Choose your color"
                  onChange={(e) => {
                    onColor(propertie.id, e.target.value);
                  }}
                ></input>
              )}
              {propertie.type === "range" && (
                <input
                  type="range"
                  class="form-range"
                  min="2"
                  max="5"
                  value={propertie.value}
                  onChange={(e) => {
                    onRange(propertie.id, e.target.value);
                  }}
                  id="customRange2"
                ></input>
              )}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

const Settings = ({ settingPropertie, setSettingPropertie }) => {
  const handleToggleSettingsPropertie = (settingsId, nextActive) => {
    const newSettingPropertie = [...settingPropertie];
    const settings = newSettingPropertie.find((a) => a.id === settingsId);
    settings.active = nextActive;
    setSettingPropertie(newSettingPropertie);
  };

  const handleToggleColor = (settingsId, nextColor) => {
    const newColor = [...settingPropertie];
    const color = newColor.find((a) => a.id === settingsId);
    color.colorLine = nextColor;
    setSettingPropertie(newColor);
  };

  const handleToggleRange = (settingsId, nextRange) => {
    const newRange = [...settingPropertie];
    const range = newRange.find((a) => a.id === settingsId);
    range.value = nextRange;
    setSettingPropertie(newRange);
  };
  return (
    <>
      <div
        className="container d-flex justify-content-start"
        style={{ paddingTop: "40px" }}
      >
        <SettingItem
          settingPropertie={settingPropertie}
          onToggle={handleToggleSettingsPropertie}
          onColor={handleToggleColor}
          onRange={handleToggleRange}
        />
      </div>
    </>
  );
};

export default Settings;
