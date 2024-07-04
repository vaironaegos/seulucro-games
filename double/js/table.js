// <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

import orderbyarray from './orderbyarray.js'

let betss = [
  {
      "id": "b2ab7d06-a794-46af-9eff-9f5939cf500a",
      "color": 1,
      "amount": 67,
      "winAmount": 80,
      "status": "loss",
      "user": {
          "id": "12f01357-1147-4b39-9b1c-f0f124fd2ff9",
          "username": "Mitchell_Medhurst",
          "name": "Wilfred Walker"
      }
  },
  {
      "id": "47dbd38a-1f07-4f39-bd03-1b16fd73f300",
      "color": 3,
      "amount": 54,
      "winAmount": 44,
      "status": "win",
      "user": {
          "id": "f775e27f-b744-44c4-a09f-bd5dcd3b829b",
          "username": "Jannie99",
          "name": "Aubrey Grimes"
      }
  },
  {
      "id": "f0438b35-de04-4414-9024-b06182b69324",
      "color": 1,
      "amount": 95,
      "winAmount": 26,
      "status": "loss",
      "user": {
          "id": "14446a8d-acca-4920-890b-7d669bb90656",
          "username": "Jules33",
          "name": "Charlotte Casper"
      }
  },
  {
      "id": "6efce078-2099-43b7-897c-3d9290adb545",
      "color": 2,
      "amount": 10,
      "winAmount": 75,
      "status": "win",
      "user": {
          "id": "a86084de-30c5-4ed7-91b8-39c3dea80019",
          "username": "Odell1",
          "name": "Crystal Bechtelar"
      }
  },
  {
      "id": "79a75fd1-24e4-4f1a-b6bf-eca52e666ea0",
      "color": 3,
      "amount": 63,
      "winAmount": 74,
      "status": "win",
      "user": {
          "id": "67b24396-5e5f-4aca-8c19-ac6f24bb1a97",
          "username": "Shany_Vandervort94",
          "name": "Beatrice Powlowski"
      }
  },
  {
      "id": "99323b11-75a9-43ec-be66-8e5fdc33f4f0",
      "color": 2,
      "amount": 83,
      "winAmount": 54,
      "status": "win",
      "user": {
          "id": "f6f745cf-fd17-4121-8a27-6930c1f63215",
          "username": "Tressie_Bernier",
          "name": "Mrs. Holly Runolfsson"
      }
  },
  {
      "id": "d4e1e608-06ba-4e89-abf5-7f217d0e8b07",
      "color": 2,
      "amount": 50,
      "winAmount": 43,
      "status": "win",
      "user": {
          "id": "3ba4924b-4c8c-44f8-a5ac-31deb159157a",
          "username": "Jeramy99",
          "name": "Carolyn Strosin"
      }
  },
  {
      "id": "45dddfe5-3cbb-48b5-a149-8c88065b3c3f",
      "color": 1,
      "amount": 94,
      "winAmount": 12,
      "status": "loss",
      "user": {
          "id": "fc6450e8-63e4-492a-a90b-9b95929162d0",
          "username": "Arne.Cremin30",
          "name": "Rosie Stanton"
      }
  },
  {
      "id": "9152a786-7683-41e8-8c95-93a2ee68b894",
      "color": 1,
      "amount": 28,
      "winAmount": 38,
      "status": "win",
      "user": {
          "id": "fed956cd-afda-4e26-8717-f03798918c2e",
          "username": "Afton.Mraz",
          "name": "Ms. Angel Kohler"
      }
  },
  {
      "id": "02a90be4-6aff-4b5b-a0e5-71366ae12109",
      "color": 1,
      "amount": 97,
      "winAmount": 82,
      "status": "loss",
      "user": {
          "id": "042d0617-cf71-4716-a88d-58443cf72865",
          "username": "Augustus.Rempel3",
          "name": "Audrey Stokes"
      }
  },
  {
      "id": "aa459c53-225c-447d-a56f-3cb4175f39d4",
      "color": 3,
      "amount": 32,
      "winAmount": 26,
      "status": "loss",
      "user": {
          "id": "1faebfe5-582b-497f-af77-843c539d283d",
          "username": "Halie_Trantow62",
          "name": "Tami Fritsch"
      }
  },
  {
      "id": "b72972d4-b6a9-4b34-b100-c5cda9e4d99e",
      "color": 1,
      "amount": 21,
      "winAmount": 16,
      "status": "loss",
      "user": {
          "id": "e9552b26-f185-4e76-bfd9-9541b051e333",
          "username": "Shanny98",
          "name": "Irvin Klocko"
      }
  },
  {
      "id": "9833a9c6-2d59-4c1a-817b-121b1f15e27d",
      "color": 1,
      "amount": 21,
      "winAmount": 19,
      "status": "loss",
      "user": {
          "id": "70ba0ddc-e26d-42a9-8978-1f1be2b05918",
          "username": "Dave67",
          "name": "Gina Koelpin"
      }
  },
  {
      "id": "63b719ae-839f-42f7-ab15-ea5796b85af1",
      "color": 1,
      "amount": 62,
      "winAmount": 37,
      "status": "win",
      "user": {
          "id": "09ee1794-e1d5-4044-9834-ece4baa08743",
          "username": "Andrew77",
          "name": "Nicholas Bernier"
      }
  },
  {
      "id": "981b3088-59a9-4b81-91c4-1cb8975ad5c5",
      "color": 1,
      "amount": 51,
      "winAmount": 33,
      "status": "loss",
      "user": {
          "id": "2a636c7a-0466-411e-b0d3-f3119750c14b",
          "username": "Camila64",
          "name": "Leigh Bailey"
      }
  },
  {
      "id": "330dc18e-da73-4f64-ad7a-d08eea600671",
      "color": 1,
      "amount": 12,
      "winAmount": 46,
      "status": "loss",
      "user": {
          "id": "94b61d73-fd76-4434-958b-907416e82d3d",
          "username": "Dayna23",
          "name": "Felipe VonRueden"
      }
  },
  {
      "id": "2bb76069-5be7-4e28-856a-3517effacdf5",
      "color": 3,
      "amount": 24,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "5099b38f-78c2-4f56-b7d6-a4d0e12ec561",
          "username": "Arvel.Waters98",
          "name": "Janet Little"
      }
  },
  {
      "id": "1c52ca97-d63d-4ab9-858e-bd522eddcf74",
      "color": 2,
      "amount": 11,
      "winAmount": 52,
      "status": "loss",
      "user": {
          "id": "d3e72f80-df92-4073-b63e-d3e0e69a821a",
          "username": "Erika_Mitchell",
          "name": "Gail Flatley"
      }
  },
  {
      "id": "88d6502b-b356-4079-beb1-9338ee7ac020",
      "color": 3,
      "amount": 30,
      "winAmount": 69,
      "status": "loss",
      "user": {
          "id": "35dd30de-4ba0-4eb2-8cd4-64ee623018cf",
          "username": "Fausto_Predovic4",
          "name": "Terry Maggio"
      }
  },
  {
      "id": "4a1a1754-8532-4fde-81ab-f48885fa57ca",
      "color": 3,
      "amount": 46,
      "winAmount": 34,
      "status": "win",
      "user": {
          "id": "5160469b-4ee6-4ded-bec4-13050a819a8d",
          "username": "Ciara82",
          "name": "Joseph Zboncak"
      }
  },
  {
      "id": "af83c459-1b81-46b1-8900-6bff98574ab0",
      "color": 2,
      "amount": 52,
      "winAmount": 70,
      "status": "loss",
      "user": {
          "id": "60513c1b-3d24-43dc-8066-488a51611bf9",
          "username": "Arne.Sawayn1",
          "name": "Angie Sanford"
      }
  },
  {
      "id": "ea556228-86dd-420c-9dc2-4438bf042937",
      "color": 1,
      "amount": 97,
      "winAmount": 21,
      "status": "win",
      "user": {
          "id": "a07085e5-c3b2-4062-ba03-b692641b7cdd",
          "username": "Daisha85",
          "name": "Andy Carroll"
      }
  },
  {
      "id": "8d65506a-70d6-41fe-8467-9291f9ad38a9",
      "color": 2,
      "amount": 36,
      "winAmount": 23,
      "status": "win",
      "user": {
          "id": "350a621a-403a-4899-a712-8045994df509",
          "username": "Ellen_Mohr3",
          "name": "Joshua Okuneva"
      }
  },
  {
      "id": "7e26387a-1974-4bec-914d-3fe2dca702cb",
      "color": 2,
      "amount": 68,
      "winAmount": 54,
      "status": "loss",
      "user": {
          "id": "29ed6bf8-957a-45ba-9429-3d8e5580ec5f",
          "username": "Amir.OConnell28",
          "name": "Morris Dickinson"
      }
  },
  {
      "id": "6b9ab8b6-e15b-44d0-83c7-dae23b53a261",
      "color": 1,
      "amount": 15,
      "winAmount": 60,
      "status": "loss",
      "user": {
          "id": "32515a2f-da4a-4928-ad5e-574c0637dd36",
          "username": "Mae_Pagac33",
          "name": "Franklin Brown"
      }
  },
  {
      "id": "5c67e756-9484-45cd-9309-29989436f369",
      "color": 2,
      "amount": 30,
      "winAmount": 17,
      "status": "loss",
      "user": {
          "id": "39a2c77e-29eb-437d-8221-9fa902e5e358",
          "username": "Ike_Cummerata",
          "name": "Phil Glover V"
      }
  },
  {
      "id": "41aaf75e-cd06-4a96-bf04-34053534388c",
      "color": 1,
      "amount": 47,
      "winAmount": 98,
      "status": "loss",
      "user": {
          "id": "94b5edcb-43a9-499f-9a47-630839ac3308",
          "username": "Willie.Armstrong93",
          "name": "Mr. Noah D'Amore"
      }
  },
  {
      "id": "414ead2e-13b0-4a0d-8463-b792fedeb017",
      "color": 1,
      "amount": 81,
      "winAmount": 85,
      "status": "win",
      "user": {
          "id": "6fc31de0-33bb-4ddb-bccb-21a94ed3a853",
          "username": "Dwight_Luettgen69",
          "name": "Cynthia Hagenes"
      }
  },
  {
      "id": "c99e186f-9a34-4c49-adc3-5ecc87cda6a6",
      "color": 1,
      "amount": 35,
      "winAmount": 58,
      "status": "win",
      "user": {
          "id": "9e3ff625-c96b-4501-b944-0ee3de9730de",
          "username": "Andreanne74",
          "name": "Lynda Mayer"
      }
  },
  {
      "id": "163b8f3b-0a40-4aa9-bdfc-de66cd0501a3",
      "color": 1,
      "amount": 59,
      "winAmount": 10,
      "status": "loss",
      "user": {
          "id": "6b85ee64-3ae6-4b18-be61-8b6c14d3f887",
          "username": "Alverta_Carter20",
          "name": "Tracy Gibson PhD"
      }
  },
  {
      "id": "1885ddd2-1f7c-4396-ac11-df72c3ff1dc6",
      "color": 1,
      "amount": 93,
      "winAmount": 72,
      "status": "win",
      "user": {
          "id": "9885e0dd-9831-434e-a965-f80dddb541c9",
          "username": "Javonte60",
          "name": "Emanuel Blanda"
      }
  },
  {
      "id": "ba736983-8984-4eb6-b8ad-c6a6b8802c38",
      "color": 2,
      "amount": 35,
      "winAmount": 83,
      "status": "win",
      "user": {
          "id": "3658fb40-791c-40a7-a6cd-87e05459a90a",
          "username": "King.Champlin75",
          "name": "Marta Marks"
      }
  },
  {
      "id": "c8be0582-ebaa-41b7-b57a-86a1dd442df6",
      "color": 3,
      "amount": 27,
      "winAmount": 32,
      "status": "win",
      "user": {
          "id": "0b54045e-2eb6-4ede-9119-922885de2642",
          "username": "Jakayla26",
          "name": "Randy Rohan"
      }
  },
  {
      "id": "a9ccd51c-b733-4849-ade6-375d1031db1e",
      "color": 3,
      "amount": 44,
      "winAmount": 84,
      "status": "win",
      "user": {
          "id": "5dc8cf05-7aa3-40b9-a221-6867c36bf421",
          "username": "Alfonso29",
          "name": "Vicky Reichert MD"
      }
  },
  {
      "id": "999bc7e1-73f2-4b22-9a24-f0ceed74a1eb",
      "color": 3,
      "amount": 47,
      "winAmount": 98,
      "status": "loss",
      "user": {
          "id": "11e4aee6-fa13-4924-ab7b-387812a83e6d",
          "username": "Derrick44",
          "name": "Jan Reynolds"
      }
  },
  {
      "id": "45dfb8df-49bd-4888-b526-b54adb76898f",
      "color": 2,
      "amount": 50,
      "winAmount": 75,
      "status": "win",
      "user": {
          "id": "2cdb8d44-d0bb-42a0-985f-07cd6fc4d54f",
          "username": "Casper.Huels",
          "name": "Darnell Kub"
      }
  },
  {
      "id": "4adf930e-65af-4bf2-8365-d78bea7020dd",
      "color": 2,
      "amount": 97,
      "winAmount": 21,
      "status": "win",
      "user": {
          "id": "77070654-d160-44e1-b409-18585ddd4a6f",
          "username": "Maya_Bernier",
          "name": "Miss Felix Wiegand"
      }
  },
  {
      "id": "ecc75b94-241e-4bb9-b626-5941d6912722",
      "color": 1,
      "amount": 80,
      "winAmount": 98,
      "status": "loss",
      "user": {
          "id": "9d41db2f-6179-4857-b658-45139f5f097e",
          "username": "Wyatt_Langosh51",
          "name": "Gordon Klein"
      }
  },
  {
      "id": "66b9383d-cb34-4f22-af57-d4c38dbc38f9",
      "color": 1,
      "amount": 44,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "efd9dd58-4065-4198-bd13-b686eb05b885",
          "username": "Eduardo_Koss55",
          "name": "Kristopher Bechtelar"
      }
  },
  {
      "id": "9ee34681-ee40-442e-aabe-e14abc3417d4",
      "color": 2,
      "amount": 16,
      "winAmount": 45,
      "status": "loss",
      "user": {
          "id": "09091f9d-8d88-4b28-b677-562085ca8185",
          "username": "Wilburn.Hickle28",
          "name": "Sheryl McGlynn"
      }
  },
  {
      "id": "1e737d98-4266-4bf2-a2b4-41cb5f673dd2",
      "color": 3,
      "amount": 35,
      "winAmount": 88,
      "status": "loss",
      "user": {
          "id": "1c857851-166c-419d-aee5-9a3819579f79",
          "username": "Julius_Balistreri55",
          "name": "Johnny Streich PhD"
      }
  },
  {
      "id": "31fb535e-2904-4058-b7e9-55660e531427",
      "color": 3,
      "amount": 76,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "3a142c44-e3ea-4f64-8935-128cd6bf9554",
          "username": "Filomena.Zulauf",
          "name": "Francis Tillman"
      }
  },
  {
      "id": "b2fe4e12-a985-4f77-8e51-51164279d944",
      "color": 3,
      "amount": 44,
      "winAmount": 24,
      "status": "win",
      "user": {
          "id": "d9efa8d8-1416-4e03-85cd-b3ec3b31c91d",
          "username": "Tressa_Kutch68",
          "name": "Brandy Torphy"
      }
  },
  {
      "id": "4b9f5458-5a4c-4bda-8331-1d06ea1f6b27",
      "color": 2,
      "amount": 31,
      "winAmount": 89,
      "status": "win",
      "user": {
          "id": "59175048-ec96-40f4-9a18-72bd7a145dcc",
          "username": "Obie84",
          "name": "Leticia Hoeger"
      }
  },
  {
      "id": "3eb4fbcf-2b1c-4aa4-86a4-d8e06a717d3e",
      "color": 3,
      "amount": 93,
      "winAmount": 33,
      "status": "loss",
      "user": {
          "id": "ca4e97c7-d716-4d70-a351-6063a16455e3",
          "username": "Jakob51",
          "name": "Sonia Mosciski DDS"
      }
  },
  {
      "id": "0c155bd1-3208-4112-a7d3-063c21cdc30a",
      "color": 3,
      "amount": 78,
      "winAmount": 46,
      "status": "win",
      "user": {
          "id": "f696624d-ce77-4fcb-a4db-0717c8274486",
          "username": "Hallie_McDermott",
          "name": "Ashley Ondricka"
      }
  },
  {
      "id": "c6e69d7a-03dd-474e-9c63-29d306cd91d3",
      "color": 1,
      "amount": 75,
      "winAmount": 99,
      "status": "win",
      "user": {
          "id": "2ca57ab6-d4a0-41c3-b66a-a12b489c49f6",
          "username": "Yolanda43",
          "name": "Candice Yost"
      }
  },
  {
      "id": "25fdf5ce-da78-42a2-8f41-8ff029e0df97",
      "color": 2,
      "amount": 35,
      "winAmount": 23,
      "status": "loss",
      "user": {
          "id": "0284a8a2-6861-48ea-b1d1-5032ce6d9195",
          "username": "Amina.Raynor9",
          "name": "Darin Ortiz"
      }
  },
  {
      "id": "67ef807e-031d-43ed-9951-e3025c14cb0b",
      "color": 2,
      "amount": 50,
      "winAmount": 26,
      "status": "win",
      "user": {
          "id": "54f6162a-e77e-4352-86a2-dc5e63b3235f",
          "username": "Milo.Rogahn65",
          "name": "Ethel Ward"
      }
  },
  {
      "id": "41385b91-a4ce-43f1-bb69-2517942a541c",
      "color": 1,
      "amount": 50,
      "winAmount": 74,
      "status": "loss",
      "user": {
          "id": "fab23702-58da-4528-b5d9-b3c16f12f9d7",
          "username": "Alexis.Considine",
          "name": "Michele Schamberger"
      }
  },
  {
      "id": "a008886a-83ff-411d-a818-93d7302e7f42",
      "color": 2,
      "amount": 80,
      "winAmount": 11,
      "status": "loss",
      "user": {
          "id": "f72cbc41-5f04-424f-a811-5f8cf1477670",
          "username": "Maia_Lehner8",
          "name": "Sherri Schulist"
      }
  },
  {
      "id": "7d190147-9d35-4fd5-a566-6e0691ec0edf",
      "color": 1,
      "amount": 40,
      "winAmount": 58,
      "status": "win",
      "user": {
          "id": "72b7fc7b-017d-460f-81e0-e1d6cc789596",
          "username": "Estel_Goodwin",
          "name": "Mandy Turcotte"
      }
  },
  {
      "id": "463ee311-2d01-4b8e-b897-8e8a343e6ea9",
      "color": 1,
      "amount": 44,
      "winAmount": 18,
      "status": "loss",
      "user": {
          "id": "bb3c969e-0409-44f2-8ca4-4edd21f82b56",
          "username": "Esmeralda.Rosenbaum24",
          "name": "Darin McDermott"
      }
  },
  {
      "id": "19436e98-0276-450d-8178-9bdee5874fcf",
      "color": 1,
      "amount": 37,
      "winAmount": 76,
      "status": "loss",
      "user": {
          "id": "da41c0b8-d7f7-4ef2-862b-e64c427ca48d",
          "username": "Florine74",
          "name": "Blake Towne"
      }
  },
  {
      "id": "96e6e4b9-f79d-484d-9964-6a76b5bbb7c0",
      "color": 2,
      "amount": 89,
      "winAmount": 78,
      "status": "loss",
      "user": {
          "id": "fcf7c528-8151-4240-9c5b-4d095d93dedc",
          "username": "Hyman_Erdman",
          "name": "Claude Douglas"
      }
  },
  {
      "id": "c21e11b7-72b6-4bf5-9980-d95fef166704",
      "color": 1,
      "amount": 17,
      "winAmount": 63,
      "status": "win",
      "user": {
          "id": "16c40a27-29d9-4048-b47d-c132decf9969",
          "username": "Kyle.Bernhard",
          "name": "Maggie Bosco"
      }
  },
  {
      "id": "3612e54d-abed-4f93-bc91-5646049df3c2",
      "color": 2,
      "amount": 47,
      "winAmount": 15,
      "status": "loss",
      "user": {
          "id": "bcd7600d-9b83-49db-9ea8-292501c76c97",
          "username": "Keith.Schulist",
          "name": "Brandy Witting"
      }
  },
  {
      "id": "c1b7913c-1ed9-4bad-b6b8-d2399c97d9d6",
      "color": 1,
      "amount": 59,
      "winAmount": 89,
      "status": "loss",
      "user": {
          "id": "ab96c88a-3938-44b1-8182-b17a0280a594",
          "username": "Jarvis.Glover17",
          "name": "Miss Robert Toy DDS"
      }
  },
  {
      "id": "176d078f-0ae3-4ae3-aed7-f8e492e224fa",
      "color": 2,
      "amount": 50,
      "winAmount": 54,
      "status": "loss",
      "user": {
          "id": "fbb20b87-c7b7-4b08-9e6e-94e9e5cc0545",
          "username": "Santiago41",
          "name": "Mrs. Jonathan Jast"
      }
  },
  {
      "id": "7d10785c-4182-4b4c-8b61-8394ef35003a",
      "color": 3,
      "amount": 11,
      "winAmount": 63,
      "status": "win",
      "user": {
          "id": "9a000e06-3f06-47f1-befb-a0585dd194af",
          "username": "Kory9",
          "name": "Gerald Aufderhar"
      }
  },
  {
      "id": "4da3c8da-785f-469a-9a09-b83884a8b40a",
      "color": 3,
      "amount": 31,
      "winAmount": 84,
      "status": "loss",
      "user": {
          "id": "34f81038-a117-4d69-afe3-93e20a6a3cbe",
          "username": "Rhiannon_Haley",
          "name": "Ebony Rice"
      }
  },
  {
      "id": "9238abd9-8210-4fba-a40b-cb09ac80f123",
      "color": 1,
      "amount": 43,
      "winAmount": 52,
      "status": "win",
      "user": {
          "id": "7e589616-44c6-4c31-beba-a857c89b7d70",
          "username": "Merle_Barton",
          "name": "Miss Israel Kerluke"
      }
  },
  {
      "id": "c19988d2-f4fb-4661-aacb-ffabc91950c3",
      "color": 2,
      "amount": 25,
      "winAmount": 75,
      "status": "loss",
      "user": {
          "id": "d3de82ff-0ca4-41f2-b409-f9a0a254abb8",
          "username": "Jewel_Macejkovic",
          "name": "Ricardo Klocko II"
      }
  },
  {
      "id": "87c0c5e4-3013-449a-ab3f-79b862387811",
      "color": 3,
      "amount": 86,
      "winAmount": 42,
      "status": "loss",
      "user": {
          "id": "d56f84fd-a56a-407e-8e41-fea626740a2d",
          "username": "Sharon_Dickens0",
          "name": "Leroy Bergstrom"
      }
  },
  {
      "id": "e661b572-e232-4d3d-bdc9-9c1cd7bc2e7e",
      "color": 2,
      "amount": 82,
      "winAmount": 16,
      "status": "loss",
      "user": {
          "id": "2a3a5b13-2e8a-4882-aea8-b5e4c5b9b387",
          "username": "Amanda_Cummings96",
          "name": "Omar Shanahan"
      }
  },
  {
      "id": "8465bef7-9e10-45e6-b2e1-5ed225cbff69",
      "color": 2,
      "amount": 95,
      "winAmount": 82,
      "status": "win",
      "user": {
          "id": "6fb0de1b-9746-4830-8d73-5fb00a02c19a",
          "username": "Julius.Morissette",
          "name": "Madeline Kertzmann PhD"
      }
  },
  {
      "id": "482ee8f5-9bb7-4544-8aeb-13b14f349499",
      "color": 2,
      "amount": 68,
      "winAmount": 47,
      "status": "win",
      "user": {
          "id": "fb5daf97-f624-44f3-9f76-59384e5dc8e4",
          "username": "Cassie28",
          "name": "Felipe Quitzon"
      }
  },
  {
      "id": "afc8b4dc-1644-4827-b7b9-4a54fc4a4931",
      "color": 3,
      "amount": 88,
      "winAmount": 19,
      "status": "win",
      "user": {
          "id": "0bf17a74-aa7f-4c7c-a71d-1386e8daa42a",
          "username": "Elza42",
          "name": "Audrey Hoppe"
      }
  },
  {
      "id": "654dba31-6957-49ae-950e-441775aaf108",
      "color": 1,
      "amount": 22,
      "winAmount": 28,
      "status": "win",
      "user": {
          "id": "ae231456-8273-4876-8195-2e8c8109de47",
          "username": "Claude8",
          "name": "Edmund Grant V"
      }
  },
  {
      "id": "7d7742a5-84e2-4210-ac7b-39f8e360e236",
      "color": 3,
      "amount": 97,
      "winAmount": 90,
      "status": "win",
      "user": {
          "id": "b1bc89b1-1b51-45d2-8952-852f51df8f31",
          "username": "Peter42",
          "name": "Stephanie Erdman"
      }
  },
  {
      "id": "f20e8ec7-696f-4dc7-9572-0a3080b4ec08",
      "color": 3,
      "amount": 93,
      "winAmount": 35,
      "status": "win",
      "user": {
          "id": "4abee9f3-5d22-4bba-b07d-76f653004b7d",
          "username": "Junior.Ledner",
          "name": "Horace Abshire"
      }
  },
  {
      "id": "ff435d35-2232-46a9-b86c-460168aa9fb4",
      "color": 2,
      "amount": 16,
      "winAmount": 35,
      "status": "loss",
      "user": {
          "id": "0c557c3f-94ab-44bf-96ad-a4ad5fbb51a7",
          "username": "Allen76",
          "name": "Santos Hoppe"
      }
  },
  {
      "id": "5714e99f-2fa8-4c14-ad0c-5c4ba6645798",
      "color": 1,
      "amount": 14,
      "winAmount": 54,
      "status": "win",
      "user": {
          "id": "e679d497-a82c-43df-9308-ac2d09773986",
          "username": "Hans.Streich",
          "name": "Priscilla O'Keefe"
      }
  },
  {
      "id": "3a6b710b-af70-4886-8d5f-8bbf8107fc9b",
      "color": 2,
      "amount": 14,
      "winAmount": 20,
      "status": "loss",
      "user": {
          "id": "66b60a20-74cc-42fa-bf5d-711f311ed2dd",
          "username": "Tyrese.Greenholt89",
          "name": "Wade Upton MD"
      }
  },
  {
      "id": "ae360342-7dd9-4448-9bc6-ed34f1caee28",
      "color": 2,
      "amount": 54,
      "winAmount": 21,
      "status": "win",
      "user": {
          "id": "74b9a51f-45b2-4264-9b49-52fac8d989b1",
          "username": "Kurt_Runolfsson94",
          "name": "Peggy Rath"
      }
  },
  {
      "id": "f071cbdc-1d9d-42f6-897b-065d9dd26d04",
      "color": 2,
      "amount": 93,
      "winAmount": 68,
      "status": "loss",
      "user": {
          "id": "0b59a3ef-739f-41fb-b56a-dd3bb0d4f586",
          "username": "Karley_Heidenreich",
          "name": "Emily Anderson DVM"
      }
  },
  {
      "id": "4a8f68ad-66aa-454e-99fe-f5f7a07de8d1",
      "color": 3,
      "amount": 73,
      "winAmount": 87,
      "status": "win",
      "user": {
          "id": "74163509-db89-4202-b160-b0888bdd48a8",
          "username": "Duncan_Abbott18",
          "name": "Betsy Macejkovic"
      }
  },
  {
      "id": "e8782dc6-ad50-4548-a142-734cdf71ff50",
      "color": 2,
      "amount": 95,
      "winAmount": 62,
      "status": "loss",
      "user": {
          "id": "a0aa2b4e-bdd9-4477-a17c-a4b21ac04e52",
          "username": "Julian_Stroman45",
          "name": "Kellie Rath"
      }
  },
  {
      "id": "3c13d09e-61b3-448b-9b5c-29771da9d68f",
      "color": 3,
      "amount": 18,
      "winAmount": 54,
      "status": "loss",
      "user": {
          "id": "878c5738-d6ba-4371-a00c-2b60883e7d5a",
          "username": "Nathaniel_Smith55",
          "name": "Mattie Durgan"
      }
  },
  {
      "id": "8a952307-fab0-497c-8520-c9ba56c4001c",
      "color": 2,
      "amount": 90,
      "winAmount": 76,
      "status": "loss",
      "user": {
          "id": "b9521042-705a-4b55-869c-f28a59d32d5d",
          "username": "Arvel.Leuschke66",
          "name": "Tara Mayert"
      }
  },
  {
      "id": "5b33ca5c-3134-4d7c-ab1b-92f567439c58",
      "color": 2,
      "amount": 27,
      "winAmount": 48,
      "status": "loss",
      "user": {
          "id": "8262452f-1c17-4088-9e34-5bb77c80c59f",
          "username": "Darien.Beer83",
          "name": "Darla Hermiston"
      }
  },
  {
      "id": "7740aa48-2550-4d4a-be45-99666547fbbb",
      "color": 3,
      "amount": 83,
      "winAmount": 62,
      "status": "loss",
      "user": {
          "id": "d131544b-77d5-4b3f-856a-b4ba23c53f59",
          "username": "Waldo_Kuvalis",
          "name": "Marty Stokes"
      }
  },
  {
      "id": "86e50409-7d87-4441-9b04-40aec6678f50",
      "color": 2,
      "amount": 64,
      "winAmount": 31,
      "status": "loss",
      "user": {
          "id": "58dcf4be-8992-48ad-ad94-23496727fed3",
          "username": "Claudia3",
          "name": "Carole Boyer"
      }
  },
  {
      "id": "0973662a-8d12-4e0c-8569-d04d48617d61",
      "color": 2,
      "amount": 26,
      "winAmount": 25,
      "status": "win",
      "user": {
          "id": "f2bb4711-4146-4c1f-a00f-c05f2b08e12c",
          "username": "Stan77",
          "name": "Miss Adam Kreiger"
      }
  },
  {
      "id": "406216fb-fa8a-4357-a23b-adc983c29687",
      "color": 2,
      "amount": 76,
      "winAmount": 22,
      "status": "loss",
      "user": {
          "id": "c79d4515-f873-466e-b125-77fdc5bbf4e6",
          "username": "Damaris.Schuster80",
          "name": "Kristin Bosco"
      }
  },
  {
      "id": "b96871f7-1d7b-4e3e-a535-de1980a4e4ae",
      "color": 3,
      "amount": 23,
      "winAmount": 35,
      "status": "win",
      "user": {
          "id": "dabc1dbf-a160-45a5-b953-2e29dc611771",
          "username": "William.Runolfsdottir73",
          "name": "Alberto Cronin"
      }
  },
  {
      "id": "38f1cc77-6781-40c4-8468-fd3ce5a31ca0",
      "color": 3,
      "amount": 42,
      "winAmount": 13,
      "status": "win",
      "user": {
          "id": "5e4d8958-343e-4595-aba6-0e789e0be559",
          "username": "Mozell_Stark",
          "name": "Billie Luettgen"
      }
  },
  {
      "id": "75c02d19-3edd-4ce0-9805-7cdb1e755595",
      "color": 3,
      "amount": 83,
      "winAmount": 46,
      "status": "win",
      "user": {
          "id": "77a33de8-0728-4e9f-9c2b-845b830c9df4",
          "username": "Nestor.DuBuque",
          "name": "Pablo Blick"
      }
  },
  {
      "id": "0b2deed7-010c-4b20-9453-0f7ef76374d4",
      "color": 2,
      "amount": 14,
      "winAmount": 91,
      "status": "loss",
      "user": {
          "id": "11334f06-9405-4eb8-aaa9-c74d7cc2cbad",
          "username": "Tremaine66",
          "name": "Orville Altenwerth"
      }
  },
  {
      "id": "a6f4c881-7ac8-4da0-a8cc-9a15579a5585",
      "color": 1,
      "amount": 44,
      "winAmount": 10,
      "status": "loss",
      "user": {
          "id": "8084c58d-54ba-4619-b838-0e08e67eb8e4",
          "username": "Hollis_Greenholt",
          "name": "Sylvester Weber"
      }
  },
  {
      "id": "19bf7527-f799-45ec-9dc3-0d5b7c65c440",
      "color": 1,
      "amount": 94,
      "winAmount": 50,
      "status": "win",
      "user": {
          "id": "c14234a1-e1ba-4f60-bf07-fa8a0f988914",
          "username": "Earnestine.Rohan75",
          "name": "Eula Jacobs"
      }
  },
  {
      "id": "367d9a6b-3ff4-4b4f-beea-9beb71968955",
      "color": 2,
      "amount": 41,
      "winAmount": 82,
      "status": "win",
      "user": {
          "id": "c9cb3475-f377-4859-bac3-86ba3bad585e",
          "username": "Ruthe_Douglas",
          "name": "Dexter Collier"
      }
  },
  {
      "id": "ba21cb33-9227-4cbd-8d7e-f66b4758769a",
      "color": 3,
      "amount": 44,
      "winAmount": 35,
      "status": "loss",
      "user": {
          "id": "b4d844ed-afa5-48fe-a3d5-dbce94bd3f55",
          "username": "Hayley_Mitchell",
          "name": "Johanna Champlin"
      }
  },
  {
      "id": "918b2788-d135-459a-86cf-ec89e82f47b9",
      "color": 1,
      "amount": 10,
      "winAmount": 72,
      "status": "loss",
      "user": {
          "id": "9d7b6467-925c-4d73-8eef-760e3050939a",
          "username": "Justine12",
          "name": "Mable Kunde"
      }
  },
  {
      "id": "1e4b2abe-8fd4-42d5-9c76-252d46579ee4",
      "color": 2,
      "amount": 45,
      "winAmount": 22,
      "status": "win",
      "user": {
          "id": "7e146dd8-0a1f-4036-9826-c8aee318b69e",
          "username": "Gloria.Wiegand",
          "name": "Dana Terry"
      }
  },
  {
      "id": "457b4de4-90bb-4f37-bb78-dcbd1337c913",
      "color": 1,
      "amount": 18,
      "winAmount": 62,
      "status": "loss",
      "user": {
          "id": "919a7ae8-093b-4cbb-84dd-88b510a72cbb",
          "username": "Nico_Strosin15",
          "name": "Bradley Franey"
      }
  },
  {
      "id": "d51e82a5-baf3-4f25-b2dc-a8e5bc78c17b",
      "color": 1,
      "amount": 67,
      "winAmount": 36,
      "status": "win",
      "user": {
          "id": "2e33099b-e193-4924-aee0-36b0b28cb9d8",
          "username": "Sarah_Bode51",
          "name": "Archie Conn"
      }
  },
  {
      "id": "db46c67e-dde4-432c-8fb5-5d12163d4a83",
      "color": 2,
      "amount": 94,
      "winAmount": 82,
      "status": "loss",
      "user": {
          "id": "f31f15cc-0595-46d6-9f11-4c8c4695e04a",
          "username": "Dave_Jacobi",
          "name": "Adrienne Feil"
      }
  },
  {
      "id": "2f116899-4417-453c-806e-e5cce9290887",
      "color": 3,
      "amount": 20,
      "winAmount": 73,
      "status": "loss",
      "user": {
          "id": "13f75154-00d8-41c2-b6cd-3d933917c44b",
          "username": "Drake_Quitzon",
          "name": "Mr. Wade Emmerich"
      }
  },
  {
      "id": "fd5c119e-3811-40d4-b36b-e7af3fb144f4",
      "color": 1,
      "amount": 15,
      "winAmount": 30,
      "status": "win",
      "user": {
          "id": "56d8309e-abdb-4fc9-90c5-04259bbe9535",
          "username": "Monte.Schiller21",
          "name": "Muriel Bednar I"
      }
  }
]

const { createApp } = Vue

let table = createApp({
  data() {
    return {
      message: 'Hello Vue!',
      lista: [],
      lista_a: [],
      lista_b: [],
      lista_c: [],
      lista_a_total: 0,
      lista_b_total: 0,
      lista_c_total: 0,
    }
  },

  methods:{
    setLista(arr){

      if(arr.length == 0) return 
      
      this.lista = arr.sort((a,b) => a.amount - b.amount)

      this.lista_a = this.lista.filter(e=>e.color == 1).reverse().slice(0,9)
      this.lista_b = this.lista.filter(e=>e.color == 2).reverse().slice(0,9)
      this.lista_c = this.lista.filter(e=>e.color == 3).reverse().slice(0,9)

      this.lista_a_total = this.lista.filter(e=>e.color == 1).map(e=>e.amount).reduce((a,b)=>a+=b)
      this.lista_b_total = this.lista.filter(e=>e.color == 2).map(e=>e.amount).reduce((a,b)=>a+=b)
      this.lista_c_total = this.lista.filter(e=>e.color == 3).map(e=>e.amount).reduce((a,b)=>a+=b)
      
      this.lista_a_quantity = this.lista.filter(e=>e.color == 1).length
      this.lista_b_quantity = this.lista.filter(e=>e.color == 2).length
      this.lista_c_quantity = this.lista.filter(e=>e.color == 3).length
    },

    tablewin(n){
      this.tablenormal()

      for(let i of document.querySelectorAll(".page")){
        i.classList.add("page-lose")
      }
      document.querySelectorAll(".page")[n].classList.add("page-win")
      document.querySelectorAll(".page")[n].classList.remove("page-lose")
    },
    
    tablenormal(){
      for(let i of document.querySelectorAll(".page")){
        i.classList.remove("page-win")
        i.classList.remove("page-lose")
      }
    },

    tablewinnumber(n){
      let k = 0
            
      if([0].includes(n)) k = 1
      if([2,4,6,8].includes(n)) k = 0
      if([1,3,5,7,9].includes(n)) k = 2

      this.tablewin(k)
    }
  }
}).mount('#table')


// alert('ok')

// table.setLista(betss)

// console.log(betss)

// id="tabela_1"
// table.tablewin(2)

export default table;
