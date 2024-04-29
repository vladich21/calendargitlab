export class Api {
    constructor(){
        this.baseUrl = 'http://localhost:3000',
    }
    async registration (email, password){
        try {
            const response = await fetch( `${this.baseUrl}/registration` {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            });

      if (response.ok) {
        console.log('Регистрация прошла успешно');
        window.location.href = '/success.html'; 
      } else {
        console.error('Ошибка при регистрации');
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
    }
}
