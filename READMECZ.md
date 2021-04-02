# Color Node

Seminární práce třetího ročníku, doufám že najdu čas a chuť tento projekt rozšířit. Myšlenka je malé, levné konfigurovatelné zařízení na ovládání adresovatelných led pásků,
Fungující jako tlačítko. Jednotlivé zařízení (alias Node) mají možnost mezi sebou komunikovat tím pádem stisknutí tlačítka (event) na jednom zařízení může změnit barvu druhého
(dákový ovladać, wireless schodičový vypínač).

## TODO

- [X] rozchodit tlačítko close
- [X] při spuštění automaticky načíst aktuální konfiguraci
- [ ] udělat nový PCB na esp32 pico d4 (testování WIP)
- [ ] předělat do FreeRTOS
- [ ] umožnit ovládání ostatních node na jedné síti pomocí esp-now
- [ ] udělat něco jako switch case aby jednotlivé eventy mohly fungovat jako přepínač
- [ ] předdefinované animace
- [ ] zbavit se FastLEDu

## Obsah
1.  PCB/DPS
    * Design
    * Chyby
    * ESP8266
3. Použité knihovny
    * FastLED
    * PlatformIO
        * Arduino
        * LittleFS
        * ESP8266WiFi
        * ESP8266WebServer
        * ESP8266mDNS
    * Vlastní
        * touch
        * webserver
        * colorengine
5. Způsob vykreslování animací
    * Princip
    * Výhody / Nevýhody
    * Příklady
---

# PCB/DPS

## Design

## Chyby

## ESP8266

# Použité knihovny

## FastLED

## PlatformIO

### Arduino

### LittleFS

### ESP8266WiFi

### ESP8266WebServer

### ESP8266mDNS

## Vlastní

### touch

### webserver

### colorengine

# Způsob vykreslování animací

## Princip

## Výhody / Nevýhody

## Příklady
