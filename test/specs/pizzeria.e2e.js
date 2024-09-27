describe("Pizzeria", () => {
  beforeEach(async () => {
    await browser.url("https://pizzeria.skillbox.cc/");
  });

  it("scenario1", async () => {
   
    const entranceButton = await $("div.login-woocommerce");
    const usernameField = await $("#username");
    const passwordField = await $("#password");
    const loginButton = await $("button.woocommerce-button.button.woocommerce-form-login__submit");
    const menuButton = await $("#menu-item-389");
    const deliveryAndPaymentButton = await $("#menu-item-381");
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]');
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]');
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]');
    const fourInOnePizza = await $("li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple");
    const addToBasketButtonForFourInOne = await $("button.single_add_to_cart_button.button.alt");
    const addToBasketButtonForCinnamonBun = await $('[href="?add-to-cart=437"]');
    const addToBasketButtonForCappuccino = await $('[href="?add-to-cart=431"]');
    const cartButton = await $("a.cart-contents.wcmenucart-contents");
    const couponCodeField = await $("#coupon_code");
    const applyCouponButton = await $('[name="apply_coupon"]');
    const sumBasketText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi');
    const pizzaSortingSelect = await $("select.orderby");
    const popularitySortOption = await $('[value="popularity"]');
    const aboutUsButton = await $("#menu-item-380");
    const promotionButton = await $("#menu-item-396");
    const pizzaSideSelection = await $("#board_pack");
    const sausageBoardOption = await $('[value="65.00"]');

    // Функция авторизации
    function authorize() {
      entranceButton.click();
      usernameMyAccounField.click();
      usernameMyAccounField.setValue("Pizzeria");
      passwordMyAccountField.click();
      passwordMyAccountField.setValue("Pizzeria");
      entranceMeMyAccountButton.click();
    }

    // Функция навигации по разделу "О нас"
    function navigateAboutUs() {
      aboutUsButton.click();
      promotionButton.click();
    }

    // Функция перехода в раздел "Доставка и оплата"
    function navigateDeliveryAndPayment() {
      deliveryAndPaymentButton.click();
    }

    // Функция просмотра и сортировки пиццы
    function viewAndSortPizza() {
      menuButton.click();
      pizzaMenuButton.click();
      sortingPizzaSelect.click();
      sortingPopularityPizzaSelect.click();
    }

    // Функция добавления десерта в корзину
    function addDessertToBasket() {
      menuButton.click();
      dessertMenuButton.click();
      cinnamonBunToBasketButton.click();
    }

    // Функция добавления напитка в корзину
    function addBeverageToBasket() {
      menuButton.click();
      beveragesMenuButton.click();
      cappuccinoToBasketButton.click();
    }

    // Функция выбора пиццы и ее добавления в корзину
    function choosePizzaAndAddToBasket() {
      menuButton.click();
      pizzaMenuButton.click();
      fourInOnePizza.click();
      choosingAPizzaSideFourInOnePizza.click();
      sausageBoardFourInOnePizza.click();
      fourInOnePizzaToBasketButton.click();
    }

    // Функция применения купона и проверки суммы
    function applyCouponAndCheckTotal() {
      couponCodeBasketField.click();
      couponCodeBasketField.setValue("GIVEMEHALYAVA");
      applyCouponBasketButton.click();
      baskethomeButton.click();

      // Проверка уменьшения суммы на 10%
      expect($(sumBasketText)).toHaveText("688,50");
    }

    async function main() {
      await authorize();
      await navigateAboutUs();
      await navigateDeliveryAndPayment();
      await viewAndSortPizza();
      await addDessertToBasket();
      await addBeverageToBasket();
      await choosePizzaAndAddToBasket();
      await applyCouponAndCheckTotal();
    }
    main();
  });

  it("scenario2", async () => {
    try {
      const entranceButton = await $("div.login-woocommerce");
      const usernameField = await $("#username");
      const passwordField = await $("#password");
      const loginButton = await $("button.woocommerce-button.button.woocommerce-form-login__submit");
      const menuButton = await $("#menu-item-389");
      const deliveryAndPaymentButton = await $("#menu-item-381");
      const aboutUsButton = await $("#menu-item-380");
      const promotionButton = await $("#menu-item-396");
      const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]');
      const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]');
      const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]');
      const fourInOnePizza = await $("li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple");
      const addToCartFourInOnePizzaButton = await $("button.single_add_to_cart_button.button.alt");
      const addToCartCinnamonBunButton = await $('[href="?add-to-cart=437"]');
      const addToCartCappuccinoButton = await $('[href="?add-to-cart=431"]');
      const cartButton = await $("a.cart-contents.wcmenucart-contents");
      const couponCodeField = await $("#coupon_code");
      const applyCouponButton = await $('[name="apply_coupon"]');
      const totalAmountText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi');
      const sortingPizzaSelect = await $("select.orderby");
      const sortingByPopularityOption = await $('[value="popularity"]');
      const choosingPizzaSide = await $("#board_pack");
      const sausageBoardOption = await $('[value="65.00"]');
      const invalidCouponMessage = await $("ul.woocommerce-error > li");
    } catch (error) {
      console.error("Ошибка во время выполнения сценария:", error);
    }

    async function authorizeUser(username, password) {
      await entranceButton.click();
      await usernameMyAccountField.setValue(username);
      await passwordMyAccountField.setValue(password);
      await entranceMeMyAccountButton.click();
    }

    async function navigateToAboutUs() {
      await aboutUsButton.click();
    }

    async function viewPromotions() {
      await promotionButton.click();
    }

    async function viewDeliveryAndPayment() {
      await deliveryAndPaymentButton.click();
    }

    async function sortPizzas() {
      await menuButton.click();
      await pizzaMenuButton.click();
      await sortingPizzaSelect.click();
      await sortingPopularityPizzaSelect.click();
    }

    async function addDessert() {
      await menuButton.click();
      await dessertMenuButton.click();
      await cinnamonBunToBasketButton.click();
    }

    async function addBeverage() {
      await menuButton.click();
      await beveragesMenuButton.click();
      await cappuccinoToBasketButton.click();
    }

    async function configurePizza() {
      await menuButton.click();
      await pizzaMenuButton.click();
      await fourInOnePizza.click();
      await choosingAPizzaSideFourInOnePizza.click();
      await sausageBoardFourInOnePizza.click();
      await fourInOnePizzaToBasketButton.click();
    }

    async function applyCouponAndCheck() {
      await baskethomeButton.click();
      await couponCodeBasketField.setValue("DC120");
      await applyCouponBasketButton.click();
      await baskethomeButton.click();

      // Проверяем, что сумма не уменьшилась на 10%
      const sum = await $(sumBasketText).getText();
      expect(sum).toEqual("765,00");

      // Проверяем, что отображается сообщение о неверном купоне
      const invalidCouponMessage = await $(inscriptionInvalidCoupon).getText();
      expect(invalidCouponMessage).toEqual("Неверный купон.");
    }

    (async () => {
      try {
        await authorizeUser("Pizzeria", "Pizzeria");
        await navigateToAboutUs();
        await viewPromotions();
        await viewDeliveryAndPayment();
        await sortPizzas();
        await addDessert();
        await addBeverage();
        await configurePizza();
        await applyCouponAndCheck();
      } catch (error) {
        console.error("Error occurred:", error);
      }
    })();
  });

  it("scenario3", async () => {
    const entranceButton = await $("div.login-woocommerce");
    const usernameField = await $("#username");
    const passwordField = await $("#password");
    const loginButton = await $(
      "button.woocommerce-button.button.woocommerce-form-login__submit"
    );
    const menuButton = await $("#menu-item-389");
    const deliveryButton = await $("#menu-item-381");
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]');
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]');
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]');
    const fourInOnePizza = await $("li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple");
    const addFourInOnePizzaButton = await $("button.single_add_to_cart_button.button.alt");
    const addCinnamonBunButton = await $('[href="?add-to-cart=437"]');
    const addCappuccinoButton = await $('[href="?add-to-cart=431"]');
    const cartButton = await $("a.cart-contents.wcmenucart-contents");
    const couponCodeField = await $("#coupon_code");
    const applyCouponButton = await $('[name="apply_coupon"]');
    const sumText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi');
    const sortingSelect = await $("select.orderby");
    const popularitySortOption = await $('[value="popularity"]');
    const aboutUsButton = await $("#menu-item-380");
    const promotionsButton = await $("#menu-item-396");
    const pizzaBoardSelect = await $("#board_pack");
    const sausageBoardOption = await $('[value="65.00"]');
    const invalidCouponMessage = await $("ul.woocommerce-error > li");

    // Функция для клика на элемент
    function clickElement(element) {
      element.click();
    }

    // Функция для ввода текста
    function setValue(element, value) {
      element.click();
      element.setValue(value);
    }

    // Авторизация
    clickElement(entranceButton);
    setValue(usernameMyAccounField, "Pizzeria");
    setValue(passwordMyAccountField, "Pizzeria");

    // О нас
    clickElement(aboutUsButton);

    // Акции
    clickElement(promotionButton);

    // Доставка и оплата
    clickElement(deliveryAndPaymentButton);

    // Просмотр и сортировка пиццы
    clickElement(menuButton);
    clickElement(pizzaMenuButton);
    clickElement(sortingPizzaSelect);
    clickElement(sortingPopularityPizzaSelect);

    // Добавление десерта
    clickElement(menuButton);
    clickElement(dessertMenuButton);
    clickElement(cinnamonBunToBasketButton);

    // Добавление напитка
    clickElement(menuButton);
    clickElement(beveragesMenuButton);
    clickElement(cappuccinoToBasketButton);

    // Выбор бортов и добавление пиццы
    clickElement(menuButton);
    clickElement(pizzaMenuButton);
    clickElement(fourInOnePizza);
    clickElement(choosingAPizzaSideFourInOnePizza);
    clickElement(sausageBoardFourInOnePizza);
    clickElement(fourInOnePizzaToBasketButton);

    // Переход в корзину и применение купона
    clickElement(baskethomeButton);
    setValue(couponCodeBasketField, "GIVEMEHALYVA");
    clickElement(applyCouponBasketButton);
    clickElement(baskethomeButton);

    // Проверка, что сумма не уменьшилась на 10%
    expect($(sumBasketText)).toHaveText("765,00");
  });

  it("scenario4", async () => {
    const elements = {
      entranceButton: await $("div.login-woocommerce"), 
      usernameField: await $("#username"), 
      passwordField: await $("#password"), 
      entranceSubmitButton: await $("button.woocommerce-button.button.woocommerce-form-login__submit"), 
      menuButton: await $("#menu-item-389"),
      deliveryAndPaymentButton: await $("#menu-item-381"),
      dessertMenuButton: await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]'),
      beveragesMenuButton: await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]'),
      pizzaMenuButton: await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]'), 
      fourInOnePizza: await $( "li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple"),
      fourInOneToBasketButton: await $("button.single_add_to_cart_button.button.alt"),
      cinnamonBunToBasketButton: await $('[href="?add-to-cart=437"]'), 
      cappuccinoToBasketButton: await $('[href="?add-to-cart=431"]'), 
      basketButton: await $("a.cart-contents.wcmenucart-contents"), 
      couponCodeField: await $("#coupon_code"), 
      applyCouponButton: await $('[name="apply_coupon"]'), 
      sumBasketText: await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi'), 
      sortingPizzaSelect: await $("select.orderby"), 
      sortingPopularityPizzaSelect: await $('[value="popularity"]'),
      aboutUsButton: await $("#menu-item-380"), 
      promotionButton: await $("#menu-item-396"),

      // Оформление заказа
      choosingCrust: await $("#board_pack"), 
      sausageBoard: await $('[value="65.00"]'), 
      goToPaymentButton: await $("a.checkout-button.button.alt.wc-forward"), 
      nameField: await $("#billing_first_name"), 
      surnameField: await $("#billing_last_name"),
      addressField: await $("#billing_address_1"), 
      cityField: await $("#billing_city"), 
      stateField: await $("#billing_state"), 
      postcodeField: await $("#billing_postcode"), 
      phoneField: await $("#billing_phone"),
      emailField: await $("#billing_email"), 
      commentsField: await $("#order_comments"),
      paymentMethodRadioButton: await $("#payment_method_cod"),
      termsCheckbox: await $("#terms"),
      placeOrderButton: await $("#place_order"),
      invalidCouponMessage: await $("ul.woocommerce-error > li"),
    };

    // Пример использования элементов
    await elements.entranceButton.click();
    await elements.usernameField.setValue("your_username");
    await elements.passwordField.setValue("your_password");
    await elements.entranceSubmitButton.click();

    // Константы
    const USERNAME = "Pizzeria";
    const PASSWORD = "Pizzeria";
    const ADDRESS = "test";
    const CITY = "test";
    const STATE = "test";
    const POSTCODE = "199198";
    const PHONE = "+79998887766";
    const COMMENTS = "Позвонить за 30 минут";
    const COUPON_CODE = "GIVEMEHALYAVA";

    // Функция авторизации
    function authorize() {
      entranceButton.click();
      usernameMyAccounField.click();
      usernameMyAccounField.setValue(USERNAME);
      passwordMyAccountField.click();
      passwordMyAccountField.setValue(PASSWORD);
      entranceMeMyAccountButton.click();
    }

    // Функция для оформления заказа
    function placeOrder() {
      goToPaymentBasketButton.click();
      addressOrderField.click();
      addressOrderField.setValue(ADDRESS);
      cityOrderField.click();
      cityOrderField.setValue(CITY);
      billingStateOrderField.click();
      billingStateOrderField.setValue(STATE);
      postcodeOrderField.click();
      postcodeOrderField.setValue(POSTCODE);
      phoneOrderField.click();
      phoneOrderField.setValue(PHONE);
      commentsOrderField.click();
      commentsOrderField.setValue(COMMENTS);
      paymentOnDeliveryOrderRadioButton.click();
      acceptTheTermsOrderCheckbox.click();
      placeOrderOrderButton.click();
    }

    // Основной процесс
    authorize();

    // О нас
    aboutUsButton.click();

    // Акции
    promotionButton.click();

    // Доставка и оплата
    deliveryAndPaymentButton.click();

    // Просмотр и сортировка пиццы
    menuButton.click();
    pizzaMenuButton.click();
    sortingPizzaSelect.click();
    sortingPopularityPizzaSelect.click();

    // Добавление десерта
    menuButton.click();
    dessertMenuButton.click();
    cinnamonBunToBasketButton.click();

    // Добавление напитка
    menuButton.click();
    beveragesMenuButton.click();
    cappuccinoToBasketButton.click();

    // Выбор бортов и добавление пиццы
    menuButton.click();
    pizzaMenuButton.click();
    fourInOnePizza.click();
    choosingAPizzaSideFourInOnePizza.click();
    sausageBoardFourInOnePizza.click();
    fourInOnePizzaToBasketButton.click();

    // Переход в корзину и применение купона
    baskethomeButton.click();
    couponCodeBasketField.click();
    couponCodeBasketField.setValue(COUPON_CODE);
    applyCouponBasketButton.click();
    baskethomeButton.click();

    // Оформление заказа
    placeOrder();

    // Оформление второго заказа с тем же промокодом
    menuButton.click();
    beveragesMenuButton.click();
    cappuccinoToBasketButton.click();
    baskethomeButton.click();
    couponCodeBasketField.click();
    couponCodeBasketField.setValue(COUPON_CODE);
    applyCouponBasketButton.click();
    baskethomeButton.click();

    // Оформление заказа
    placeOrder();
  });

  it("Bonus program", async () => {
    const entranceButton = await $("div.login-woocommerce");
    const usernameMyAccounField = await $("#username");
    const passwordMyAccountField = await $("#password");
    const entranceMeMyAccountButton = await $("button.woocommerce-button.button.woocommerce-form-login__submit");
    const bonusProgramButton = await $("#menu-item-363");
    const bonusProgramUsernameField = await $("#bonus_username");
    const bonusProgramPhoneField = await $("#bonus_phone");
    const bonusProgramApplyForACardButton = await $("button.woocommerce-Button.woocommerce-button.button.woocommerce-form-register__submit");
    const successfulCardRegistrationbonusProgram = await $("#bonus_main > h3");

    // Авторизация
    await entranceButton.click();
    await usernameMyAccounField.click();
    await usernameMyAccounField.setValue("Pizzeria");
    await passwordMyAccountField.click();
    await passwordMyAccountField.setValue("Pizzeria");
    await entranceMeMyAccountButton.click();

    // Переход в бонусную программу и оформление карты
    await bonusProgramButton.click();
    await bonusProgramUsernameField.click();
    await bonusProgramUsernameField.setValue("Pizzeria");
    await bonusProgramPhoneField.click();
    await bonusProgramPhoneField.setValue("+75556664422");
    await bonusProgramApplyForACardButton.click();
    await browser.acceptAlert();

    // Проверка полей ввода
    const usernameFieldValue = await bonusProgramUsernameField.getValue();
    const phoneFieldValue = await bonusProgramPhoneField.getValue();

    expect(usernameFieldValue).toBe("Pizzeria");
    expect(phoneFieldValue).toBe("+75556664422");

    // Проверка успешного оформления карты
    const successMessage =
      await successfulCardRegistrationbonusProgram.getText();
    expect(successMessage).toBe("Ваша карта оформлена!");
  });
});