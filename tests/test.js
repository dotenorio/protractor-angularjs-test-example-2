describe('Meu primeiro teste usando Protractor', function() {

  it('Acessando aplicação', function() {
    browser.get('http://localhost:8888/');
  });

  it('Escrevendo no input', function() {
    var name = 'o meu nome é Teste, obrigado por me usar...';
    var elementName = element(by.model('yourName'));
    var elementResponse = element(by.css('h1'));
    elementName.sendKeys(name);
    browser.sleep(2000); // essa linha não é necessária, serve apenas para que você veja a mágica
    expect(elementResponse.getText()).toEqual('Hello ' + name + '!');
  });

});