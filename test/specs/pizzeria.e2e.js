describe('Pizzeria', () => {

    beforeEach(async () => {
        await browser.url(`https://pizzeria.skillbox.cc/`);
    })

    it.only('scenario1', async () => {
    
    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const menuButton = await $('#menu-item-389'); //Кнопка "меню"
    const deliveryAndPaymentButton = await $('#menu-item-381'); //Кнопка "доставка и оплата"
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]'); //Кнопка "десерты"
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]'); //Кнопка "напитки"
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]'); //Кнопка "пицца"
    const fourInOnePizza = await $('li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple'); //Пицца 4 в 1
    const fourInOnePizzaToBasketButton = await $('button.single_add_to_cart_button.button.alt'); //Кнопка "в корзину" для пиццы 4 в 1
    const cinnamonBunToBasketButton = await $('[href="?add-to-cart=437"]'); //Кнопка "в корзину" булочки с корицей
    const cappuccinoToBasketButton = await $('[href="?add-to-cart=431"]'); //Кнопка "в корзину" для капучино
    const baskethomeButton = await $('a.cart-contents.wcmenucart-contents'); //Кнопка корзины в шапке
    const couponCodeBasketField = await $('#coupon_code'); //Поле ввода купона в корзине
    const applyCouponBasketButton = await $('[name="apply_coupon"]'); //Кнопка "применить купон" 
    const sumBasketText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi'); //сумма со скидкой
    const sortingPizzaSelect = await $('select.orderby'); //Кнопка выбора сортировки для пиццы
    const sortingPopularityPizzaSelect = await $('[value="popularity"]'); //Сортировка по популярности пиццы
    const aboutUsButton = await $('#menu-item-380'); //Кнопка "о нас"
    const promotionButton = await $('#menu-item-396'); //Кнопка "акции"
    const choosingAPizzaSideFourInOnePizza = await $('#board_pack'); //Выбор борта для пиццы 4 в 1
    const sausageBoardFourInOnePizza = await $('[value="65.00"]'); //"Колбасный" борт для пиццы 4 в 1
    
    //авторизация
    entranceButton.click();
    usernameMyAccounField.click();
    usernameMyAccounField.setValue('Pizzeria');
    passwordMyAccountField.click();
    passwordMyAccountField.setValue('Pizzeria');
    entranceMeMyAccountButton.click();
    //о нас
    aboutUsButton.click();
    promotionButton.click();
    //доставка и оплата
    deliveryAndPaymentButton.click();
    //просмотр и сортировка пиццы
    menuButton.click();
    pizzaMenuButton.click();
    sortingPizzaSelect.click();
    sortingPopularityPizzaSelect.click();
    //добавление десерта
    menuButton.click();
    dessertMenuButton.click();
    cinnamonBunToBasketButton.click();
    //добавление напитка
    menuButton.click();
    beveragesMenuButton.click();
    cappuccinoToBasketButton.click();
    //выбор бортов и добавление пиццы
    menuButton.click();
    pizzaMenuButton.click();
    fourInOnePizza.click();
    choosingAPizzaSideFourInOnePizza.click();
    sausageBoardFourInOnePizza.click();
    fourInOnePizzaToBasketButton.click();
    //переход в корзину и применение купона
    couponCodeBasketField.click();
    couponCodeBasketField.setValue('GIVEMEHALYAVA');
    applyCouponBasketButton.click();
    baskethomeButton.click();
    //проверка уменьшения суммы на 10%
    expect($(sumBasketText)).toHaveText('688,50');
    });

    it('scenario2', async () => {
    
    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const menuButton = await $('#menu-item-389'); //Кнопка "меню"
    const deliveryAndPaymentButton = await $('#menu-item-381'); //Кнопка "доставка и оплата"
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]'); //Кнопка "десерты"
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]'); //Кнопка "напитки"
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]'); //Кнопка "пицца"
    const fourInOnePizza = await $('li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple'); //Пицца 4 в 1
    const fourInOnePizzaToBasketButton = await $('button.single_add_to_cart_button.button.alt'); //Кнопка "в корзину" для пиццы 4 в 1
    const cinnamonBunToBasketButton = await $('[href="?add-to-cart=437"]'); //Кнопка "в корзину" булочки с корицей
    const cappuccinoToBasketButton = await $('[href="?add-to-cart=431"]'); //Кнопка "в корзину" для капучино
    const baskethomeButton = await $('a.cart-contents.wcmenucart-contents'); //Кнопка корзины в шапке
    const couponCodeBasketField = await $('#coupon_code'); //Поле ввода купона в корзине
    const applyCouponBasketButton = await $('[name="apply_coupon"]'); //Кнопка "применить купон" 
    const sumBasketText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi'); //сумма со скидкой
    const sortingPizzaSelect = await $('select.orderby'); //Кнопка выбора сортировки для пиццы
    const sortingPopularityPizzaSelect = await $('[value="popularity"]'); //Сортировка по популярности пиццы
    const aboutUsButton = await $('#menu-item-380'); //Кнопка "о нас"
    const promotionButton = await $('#menu-item-396'); //Кнопка "акции"
    const choosingAPizzaSideFourInOnePizza = await $('#board_pack'); //Выбор борта для пиццы 4 в 1
    const sausageBoardFourInOnePizza = await $('[value="65.00"]'); //"Колбасный" борт для пиццы 4 в 1
    const inscriptionInvalidCoupon = await $('ul.woocommerce-error > li'); //надпись "неверный купон"    

    //авторизация
    entranceButton.click();
    usernameMyAccounField.click();
    usernameMyAccounField.setValue('Pizzeria');
    passwordMyAccountField.click();
    passwordMyAccountField.setValue('Pizzeria');
    entranceMeMyAccountButton.click();
    //о нас
    aboutUsButton.click();
    //акции
    promotionButton.click();
    //доставка и оплата
    deliveryAndPaymentButton.click();
    //просмотр и сортировка пиццы
    menuButton.click();
    pizzaMenuButton.click();
    sortingPizzaSelect.click();
    sortingPopularityPizzaSelect.click();
    //добавление десерта
    menuButton.click();
    dessertMenuButton.click();
    cinnamonBunToBasketButton.click();
    //добавление напитка
    menuButton.click();
    beveragesMenuButton.click();
    cappuccinoToBasketButton.click();
    //выбор бортов и добавление пиццы
    menuButton.click();
    pizzaMenuButton.click();
    fourInOnePizza.click();
    choosingAPizzaSideFourInOnePizza.click();
    sausageBoardFourInOnePizza.click();
    fourInOnePizzaToBasketButton.click();
    //переход в корзину и применение купона
    baskethomeButton.click();
    couponCodeBasketField.click();
    couponCodeBasketField.setValue('DC120');
    applyCouponBasketButton.click();
    baskethomeButton.click();
    //проверка что сумма не уменьшилась на 10%
    expect($(sumBasketText)).toHaveText('765,00');
    expect($(inscriptionInvalidCoupon)).toHaveText('Неверный купон.');
});
 
    it('scenario3', async () => {
    
    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const menuButton = await $('#menu-item-389'); //Кнопка "меню"
    const deliveryAndPaymentButton = await $('#menu-item-381'); //Кнопка "доставка и оплата"
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]'); //Кнопка "десерты"
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]'); //Кнопка "напитки"
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]'); //Кнопка "пицца"
    const fourInOnePizza = await $('li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple'); //Пицца 4 в 1
    const fourInOnePizzaToBasketButton = await $('button.single_add_to_cart_button.button.alt'); //Кнопка "в корзину" для пиццы 4 в 1
    const cinnamonBunToBasketButton = await $('[href="?add-to-cart=437"]'); //Кнопка "в корзину" булочки с корицей
    const cappuccinoToBasketButton = await $('[href="?add-to-cart=431"]'); //Кнопка "в корзину" для капучино
    const baskethomeButton = await $('a.cart-contents.wcmenucart-contents'); //Кнопка корзины в шапке
    const couponCodeBasketField = await $('#coupon_code'); //Поле ввода купона в корзине
    const applyCouponBasketButton = await $('[name="apply_coupon"]'); //Кнопка "применить купон" 
    const sumBasketText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi'); //сумма со скидкой
    const sortingPizzaSelect = await $('select.orderby'); //Кнопка выбора сортировки для пиццы
    const sortingPopularityPizzaSelect = await $('[value="popularity"]'); //Сортировка по популярности пиццы
    const aboutUsButton = await $('#menu-item-380'); //Кнопка "о нас"
    const promotionButton = await $('#menu-item-396'); //Кнопка "акции"
    const choosingAPizzaSideFourInOnePizza = await $('#board_pack'); //Выбор борта для пиццы 4 в 1
    const sausageBoardFourInOnePizza = await $('[value="65.00"]'); //"Колбасный" борт для пиццы 4 в 1
    const inscriptionInvalidCoupon = await $('ul.woocommerce-error > li'); //надпись "неверный купон"    
    
    //авторизация
    entranceButton.click();
    usernameMyAccounField.click();
    usernameMyAccounField.setValue('Pizzeria');
    passwordMyAccountField.click();
    passwordMyAccountField.setValue('Pizzeria');
    //о нас
    aboutUsButton.click();
    //акции
    promotionButton.click();
    //доставка и оплата
    deliveryAndPaymentButton.click();
    //просмотр и сортировка пиццы
    menuButton.click();
    pizzaMenuButton.click();
    sortingPizzaSelect.click();
    sortingPopularityPizzaSelect.click();
    //добавление десерта
    menuButton.click();
    dessertMenuButton.click();
    cinnamonBunToBasketButton.click();
    //добавление напитка
    menuButton.click();
    beveragesMenuButton.click();
    cappuccinoToBasketButton.click();
    //выбор бортов и добавление пиццы
    menuButton.click();
    pizzaMenuButton.click();
    fourInOnePizza.click();
    choosingAPizzaSideFourInOnePizza.click();
    sausageBoardFourInOnePizza.click();
    fourInOnePizzaToBasketButton.click();
    //переход в корзину и применение купона
    baskethomeButton.click();
    couponCodeBasketField.click();
    couponCodeBasketField.setValue('GIVEMEHALYVA');
    applyCouponBasketButton.click();
    baskethomeButton.click();
    //проверка что сумма не уменьшилась на 10%
    expect($(sumBasketText)).toHaveText('765,00');
    });

    it('scenario4', async () => {

    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const menuButton = await $('#menu-item-389'); //Кнопка "меню"
    const deliveryAndPaymentButton = await $('#menu-item-381'); //Кнопка "доставка и оплата"
    const dessertMenuButton = await $('li.cat-item.cat-item-31 > [href="http://pizzeria.skillbox.cc/product-category/menu/deserts/"]'); //Кнопка "десерты"
    const beveragesMenuButton = await $('li.cat-item.cat-item-32 > [href="http://pizzeria.skillbox.cc/product-category/menu/drinks/"]'); //Кнопка "напитки"
    const pizzaMenuButton = await $('li.cat-item.cat-item-30 > [href="http://pizzeria.skillbox.cc/product-category/menu/pizza/"]'); //Кнопка "пицца"
    const fourInOnePizza = await $('li.product.type-product.post-425.status-publish.first.instock.product_cat-pizza.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple'); //Пицца 4 в 1
    const fourInOnePizzaToBasketButton = await $('button.single_add_to_cart_button.button.alt'); //Кнопка "в корзину" для пиццы 4 в 1
    const cinnamonBunToBasketButton = await $('[href="?add-to-cart=437"]'); //Кнопка "в корзину" булочки с корицей
    const cappuccinoToBasketButton = await $('[href="?add-to-cart=431"]'); //Кнопка "в корзину" для капучино
    const baskethomeButton = await $('a.cart-contents.wcmenucart-contents'); //Кнопка корзины в шапке
    const couponCodeBasketField = await $('#coupon_code'); //Поле ввода купона в корзине
    const applyCouponBasketButton = await $('[name="apply_coupon"]'); //Кнопка "применить купон" 
    const sumBasketText = await $('[data-title="Сумма"] > strong > span.woocommerce-Price-amount.amount > bdi'); //сумма со скидкой
    const sortingPizzaSelect = await $('select.orderby'); //Кнопка выбора сортировки для пиццы
    const sortingPopularityPizzaSelect = await $('[value="popularity"]'); //Сортировка по популярности пиццы
    const aboutUsButton = await $('#menu-item-380'); //Кнопка "о нас"
    const promotionButton = await $('#menu-item-396'); //Кнопка "акции"
    const choosingAPizzaSideFourInOnePizza = await $('#board_pack'); //Выбор борта для пиццы 4 в 1
    const sausageBoardFourInOnePizza = await $('[value="65.00"]'); //"Колбасный" борт для пиццы 4 в 1
    const goToPaymentBasketButton = await $('a.checkout-button.button.alt.wc-forward'); //Кнопка "перейти к оплате"
    //оформление заказа
    const nameOrderField = await $('#billing_first_name'); //Поле ввода имени
    const surnameOrderField = await $('#billing_last_name'); //Поле ввода фамилии 
    const addressOrderField = await $('#billing_address_1'); //Поле ввода адреса
    const cityOrderField = await $('#billing_city'); //Поле ввода города
    const billingStateOrderField = await $('#billing_state'); //Поле ввода области
    const postcodeOrderField = await $('#billing_postcode'); //Поле ввода индекса
    const phoneOrderField = await $('#billing_phone'); //Поле ввода телефона
    const emailOrderField = await $('#billing_email'); //Поле ввода почты
    const commentsOrderField = await $('#order_comments'); //Поле ввода комментария к заказу
    const paymentOnDeliveryOrderRadioButton = await $('#payment_method_cod'); //Радиокнопка "оплата при доставке"
    const acceptTheTermsOrderCheckbox = await $('#terms'); //Чекбокс "принять условия"
    const placeOrderOrderButton = await $('#place_order'); //Кнопка "оформить заказ"
    const inscriptionInvalidCoupon = await $('ul.woocommerce-error > li'); //надпись "неверный купон"

    //авторизация
    entranceButton.click();
    usernameMyAccounField.click();
    usernameMyAccounField.setValue('Pizzeria');
    passwordMyAccountField.click();
    passwordMyAccountField.setValue('Pizzeria');
    entranceMeMyAccountButton.click();
    //о нас
    aboutUsButton.click();
    //акции
    promotionButton.click();
    //доставка и оплата
    deliveryAndPaymentButton.click();
    //просмотр и сортировка пиццы
    menuButton.click();
    pizzaMenuButton.click();
    sortingPizzaSelect.click();
    sortingPopularityPizzaSelect.click();
    //добавление десерта
    menuButton.click();
    dessertMenuButton.click();
    cinnamonBunToBasketButton.click();
    //добавление напитка
    menuButton.click();
    beveragesMenuButton.click();
    cappuccinoToBasketButton.click();
    //выбор бортов и добавление пиццы
    menuButton.click();
    pizzaMenuButton.click();
    fourInOnePizza.click();
    choosingAPizzaSideFourInOnePizza.click();
    sausageBoardFourInOnePizza.click();
    fourInOnePizzaToBasketButton.click();
    //переход в корзину и применение купона
    baskethomeButton.click();
    couponCodeBasketField.click();
    couponCodeBasketField.setValue('GIVEMEHALYAVA');
    applyCouponBasketButton.click();
    baskethomeButton.click();
    //Оформление заказа
    goToPaymentBasketButton.click();
    addressOrderField.click();
    addressOrderField.setValue('test');
    cityOrderField.click();
    cityOrderField.setValue('test');
    billingStateOrderField.click();
    billingStateOrderField.setValue('test');
    postcodeOrderField.click();
    postcodeOrderField.setValue('199198');
    phoneOrderField.click();
    phoneOrderField.setValue('+79998887766');
    commentsOrderField.click();
    commentsOrderField.setValue('Позвонить за 30 минут');
    paymentOnDeliveryOrderRadioButton.click();
    acceptTheTermsOrderCheckbox.click();
    placeOrderOrderButton.click();
    //Оформление второго заказа с тем же промокодом
    menuButton.click();
    beveragesMenuButton.click();
    cappuccinoToBasketButton.click();
    baskethomeButton.click();
    couponCodeBasketField.click();
    couponCodeBasketField.setValue('GIVEMEHALYAVA');
    applyCouponBasketButton.click();
    baskethomeButton.click();
    //Оформление заказа
    goToPaymentBasketButton.click();
    addressOrderField.click();
    addressOrderField.setValue('test');
    cityOrderField.click();
    cityOrderField.setValue('test');
    billingStateOrderField.click();
    billingStateOrderField.setValue('test');
    postcodeOrderField.click();
    postcodeOrderField.setValue('199198');
    phoneOrderField.click();
    phoneOrderField.setValue('+79998887766');
    commentsOrderField.click();
    commentsOrderField.setValue('Позвонить за 30 минут');
    paymentOnDeliveryOrderRadioButton.click();
    acceptTheTermsOrderCheckbox.click();
    placeOrderOrderButton.click();
   });

   it('Bonus program', async () => {
    
    const entranceButton = await $('div.login-woocommerce'); //Кнопка "войти"
    const usernameMyAccounField = await $('#username'); //Поле ввода имени пользователя или почты
    const passwordMyAccountField = await $('#password'); //Поле ввода пароля
    const entranceMeMyAccountButton = await $('button.woocommerce-button.button.woocommerce-form-login__submit'); //Кнопка "Войти"
    const bonusProgramButton = await $('#menu-item-363'); //Кнопка "бонусная программа"
    const bonusProgramUsernameField = await $('#bonus_username'); //Поле ввода имени
    const bonusProgramPhoneField = await $('#bonus_phone'); //Поле ввода телефона
    const bonusProgramApplyForACardButton = await $('button.woocommerce-Button.woocommerce-button.button.woocommerce-form-register__submit'); //Кнопка "офомить карту"
    const successfulCardRegistrationbonusProgram = await $('#bonus_main > h3'); //Надпись "Успешное оформление карты"

    //авторизация
    entranceButton.click();
    usernameMyAccounField.click();
    usernameMyAccounField.setValue('Pizzeria');
    passwordMyAccountField.click();
    passwordMyAccountField.setValue('Pizzeria');
    entranceMeMyAccountButton.click();
    //Переход в бонусную программу и оформление карты
    bonusProgramButton.click();
    bonusProgramUsernameField.click();
    bonusProgramUsernameField.setValue('Pizzeria');
    bonusProgramPhoneField.click();
    bonusProgramPhoneField.setValue('+75556664422');
    bonusProgramApplyForACardButton.click();
    browser.acceptAlert()
    //проверка полей ввода
    expect($(bonusProgramUsernameField)).toHaveText('Pizzeria');
    expect($(bonusProgramPhoneField)).toHaveText('+75556664422');
    //Проверка успешного оформления карты
    expect($(successfulCardRegistrationbonusProgram)).toHaveText('Ваша карта оформлена!');
    });
});