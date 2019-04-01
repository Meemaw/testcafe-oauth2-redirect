import { Selector } from "testcafe";

const baseUrl = "http://localhost:3000/";

fixture("<Login />").page(baseUrl);

const emailInput = Selector("input[name=username]");
const passwordInput = Selector("input[name=password]");

const loginButton = Selector("button[type=submit]");

const reactRootElement = Selector("#root");

test("Logs in with correct credentials", async t => {
  await t
    .typeText(emailInput, "matej.snuderl+testcafe@sinergise.com")
    .typeText(passwordInput, "testcafe123")
    .click(loginButton)
    .wait(10000)
    .expect(reactRootElement.exists)
    .ok();
});
