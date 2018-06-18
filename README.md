# Livecoding - aplikacja live chat w 30 minut 

Jako cel obraliśmy dziś napisanie mini aplikacji — live chatu. Co ma być w nim live? Ma się sam odświeżać, kiedy jakikolwiek użytkownik doda nową wiadomość, aby nie trzeba było reloadowac całej strony. 

Ze względu na ograniczenia czasowe rozpoczniemy od gotowego szkieletu aplikacji — klasy chatu, wraz z napisanymi metodami generującymi elementy HTML i ich wygląd (tu wykorzystamy framework CSS — Bootstrap).
Do spełnienia założeń potrzebujemy bazy danych i serwera odpowiadającego za autoryzację. Na potrzeby tego przykładu użyjemy Google Firebase — usługi SaaS, która umożliwia „wyklinanie” backendowych funkcjonalności takich jak prosta baza danych czy tzw. autoryzacja third party (np. kontem Google). 

Kod programu możecie znaleźć w tym repozytorium:
- na branchy master — szkielet apki — punkt startowy dla livecodingu
- na branchy done — całość

Efekt działania jest opublikowany tutaj: http://isa-live-chat-test.surge.sh/    