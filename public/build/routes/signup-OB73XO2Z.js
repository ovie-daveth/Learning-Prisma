import {
  FormField,
  Layout
} from "/build/_shared/chunk-FPS3ARCT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-O2VVDZ2D.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/signup.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\signup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\signup.tsx"
  );
  import.meta.hot.lastModified = "1730494230720.393";
}
function SignUp() {
  _s();
  const [formData, setFormData] = (0, import_react.useState)({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const handleInputChange = (event, field) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-5xl font-extrabold text-yellow-300", children: "Welcome to Kudos!" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-slate-300", children: "Register In To Give Some Praise!" }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "POST", className: "rounded-2xl bg-gray-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { htmlFor: "email", label: "Email", value: formData.email, onChange: (e) => handleInputChange(e, "email") }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { htmlFor: "password", type: "password", label: "Password", value: formData.password, onChange: (e) => handleInputChange(e, "password") }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { htmlFor: "firstname", label: "First Name", value: formData.firstname, onChange: (e) => handleInputChange(e, "firstname") }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { htmlFor: "lastname", label: "Last Name", value: formData.lastname, onChange: (e) => handleInputChange(e, "lastname") }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", className: "rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", value: "Sign Up" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(SignUp, "21U9lp9WUpwP6RSmYEv1/iGGM4M=");
_c = SignUp;
var _c;
$RefreshReg$(_c, "SignUp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignUp as default
};
//# sourceMappingURL=/build/routes/signup-OB73XO2Z.js.map
