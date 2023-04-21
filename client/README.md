## Workflow (pasii de lucru)

### 1. Mereu incepem lucru de pe branch-ul main

<!-- ### 2. git fetch

pentru a vedea ultimile schimbari de pe branch-ul 'origin/main'(origin == linkul catre repozitoriul de pe gitHub) -->

### 3. git pull -r

pentru a trage local ultimile schimbari in branch-ul main

### 4. git checkout -b branch-name

cu acsta comanda creem branch nou, astai stuctura cum numim un branch, exemplu: init-repo

### pina a face git add ruleaza comenzile:

npm run lint:fix
npm run format

### 5. git add -A

adaugam fisierele noi/modificate in commit

### 6. git commit -m 'msg'

dupa adaugarea fisierelor facem commit

### 7. git push

impingem branch-ul pe gitHub. o sa fie eroare, folositi comanda ce o va sugera git-ul
ex:git push --set-upstream origin nicoleta/add-tailwindcss

### 8. deschidem Pull Request

deschidem gitHub repo > code > branches > gasim branch-ul nostru > apasam butonul open pull request
pe pagina apasam open pull request

### 9. Verificam pull request

cel ce dechide pull request trebuie sa transmita linkul la pull request catre colegi.
colegii analizeaza pull request si dau aprove sau cer schimbari

### 10. merge pull request

doar cind pull request e aproved de cel putin o persoana se face merge(toate schimbarile de pe branch-ul nou le aducem pe branch-ul main)

### 11. git switch main

ma mult pe main si incep a lucra de la pasul 1 din acesta lista

## Available Scripts

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`
