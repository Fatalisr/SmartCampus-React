<?php

namespace App\DataFixtures;

use App\Entity\Intervention;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Room;
use App\Entity\SA;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {


        // =============================== //
        //      Création des users         //
        // =============================== //


        $perso1 = new User();
        $perso1->setUsername("perso1");
        $perso1->setPassword("9eeaf4902b379db3cd7a428c48afabb328a00d88ff152453e029d484780dc2f8");
        $perso1->setRole("PERSONNEL");
        $this->addReference('ref1', $perso1);
        $manager->persist($perso1);

        $tech1 = new User();
        $tech1->setUsername("tech1");
        $tech1->setPassword("3ac40463b419a7de590185c7121f0bfbe411d6168699e8014f521b050b1d6653");
        $tech1->setRole("TECHNICIEN");
        $this->addReference('tech1', $tech1);
        $manager->persist($tech1);

        $tech2 = new User();
        $tech2->setUsername("tech2");
        $tech2->setPassword("3ac40463b419a7de590185c7121f0bfbe411d6168699e8014f521b050b1d6653");
        $tech2->setRole("TECHNICIEN");
        $this->addReference('tech2', $tech2);
        $manager->persist($tech2);


        // =============================== //
        //      Création des salles        //
        // =============================== //

        /*      Rez-de-chaussée      */

        // Création de la salle du BDE Réseaux Télécom
        $bde_rt = new Room();
        $bde_rt->setName("BDE-R&T");
        $bde_rt->setNbComputer("0");
        $bde_rt->setFacing("N");
        $manager->persist($bde_rt);
        $this->addReference('bde_rt', $bde_rt);

        // Création de la salle C004
        $cOO4 = new Room();
        $cOO4->setName("C004");
        $cOO4->setNbComputer("16");
        $cOO4->setFacing("S");
        $manager->persist($cOO4);
        $this->addReference('C004', $cOO4);

        // Création de la salle C005
        $cOO5 = new Room();
        $cOO5->setName("C005");
        $cOO5->setNbComputer("16");
        $cOO5->setFacing("N");
        $manager->persist($cOO5);
        $this->addReference('C005', $cOO5);

        // Création de la salle C006
        $cOO6 = new Room();
        $cOO6->setName("C006");
        $cOO6->setNbComputer("0");
        $cOO6->setFacing("S");
        $manager->persist($cOO6);
        $this->addReference('C006', $cOO6);


        // Création de la salle C007
        $cOO7 = new Room();
        $cOO7->setName("C007");
        $cOO7->setNbComputer("2");
        $cOO7->setFacing("N");
        $manager->persist($cOO7);
        $this->addReference('C007', $cOO7);

        // Création de la salle D001
      $dOO1 = new Room();
      $dOO1->setName("D001");
      $dOO1->setNbComputer("0");
      $dOO1->setFacing("N");
        $manager->persis$dOO1);
        $this->addReference('D001'$dOO1);

        // Création de la salle D002
      $dOO2 = new Room();
      $dOO2->setName("D002");
      $dOO2->setNbComputer("0");
      $dOO2->setFacing("S");
        $manager->persis$dOO2);
        $this->addReference('D002'$dOO2);

        // Création de la salle D003
      $dOO3 = new Room();
      $dOO3->setName("D003");
      $dOO3->setNbComputer("0");
      $dOO3->setFacing("N");
        $manager->persis$dOO3);
        $this->addReference('D003'$dOO3);

        // Création de la salle D004
      $dOO4 = new Room();
      $dOO4->setName("D004");
      $dOO4->setNbComputer("0");
      $dOO4->setFacing("S");
        $manager->persis$dOO4);
        $this->addReference('D004'$dOO4);

        // Création de la salle D005
      $dOO5 = new Room();
      $dOO5->setName("D005");
      $dOO5->setNbComputer("0");
      $dOO5->setFacing("N");
        $manager->persis$dOO5);
        $this->addReference('D005'$dOO5);

        // Création de la salle du BDE Informatique
        $bde_it = new Room();
        $bde_it->setName("BDE-Info");
        $bde_it->setNbComputer("2");
        $bde_it->setFacing("N");
        $manager->persist($bde_it);
        $this->addReference('bde_it', $bde_it);

        /*      1er étage      */

        // Création de la salle C101

        $c101 = new Room();
        $c101->setName("C101");
        $c101->setNbComputer("16");
        $c101->setFacing("N");
        $manager->persist($c101);
        $this->addReference('C101', $c101);

        // Création de la salle C104
        $c104 = new Room();
        $c104->setName("C104");
        $c104->setNbComputer("16");
        $c104->setFacing("S");
        $manager->persist($c104);
        $this->addReference('C104', $c104);

        // Création de la salle C107
        $c107 = new Room();
        $c107->setName("C107");
        $c107->setNbComputer("16");
        $c107->setFacing("N");
        $manager->persist($c107);
        $this->addReference('C107', $c107);

        // Création de la salle C103
        $c103 = new Room();
        $c103->setName("C103");
        $c103->setNbComputer("16");
        $c103->setFacing("N");
        $manager->persist($c103);
        $this->addReference('C103', $c103);

        // Création de la salle C105
        $c105 = new Room();
        $c105->setName("C105");
        $c105->setNbComputer("16");
        $c105->setFacing("N");
        $manager->persist($c105);
        $this->addReference('C105', $c105);

        // Création de la salle C110
        $c110 = new Room();
        $c110->setName("C110");
        $c110->setNbComputer("16");
        $c110->setFacing("S");
        $manager->persist($c110);
        $this->addReference('C110', $c110);

        // Création de la salle D101
      $d101 = new Room();
      $d101->setName("D101");
      $d101->setNbComputer("1");
      $d101->setFacing("N");
        $manager->persis$d101);
        $this->addReference('D101'$d101);

        // Création de la salle D104
      $d104 = new Room();
      $d104->setName("D104");
      $d104->setNbComputer("2");
      $d104->setFacing("S");
        $manager->persis$d104);
        $this->addReference('D104'$d104);

        // Création de la salle D106
      $d106 = new Room();
      $d106->setName("D106");
      $d106->setNbComputer("4");
      $d106->setFacing("N");
        $manager->persis$d106);
        $this->addReference('D106'$d106);

        // Création de la salle D108
      $d108 = new Room();
      $d108->setName("D108");
      $d108->setNbComputer("4");
      $d108->setFacing("S");
        $manager->persis$d108);
        $this->addReference('D108'$d108);
// Création de la salle D105
      $d105 = new Room();
      $d105->setName("D105");
      $d105->setNbComputer("1");
      $d105->setFacing("N");
        $manager->persis$d105);
        $this->addReference('D105'$d105);

// Création de la salle D107
      $d107 = new Room();
      $d107->setName("D107");
      $d107->setNbComputer("1");
      $d107->setFacing("N");
        $manager->persis$d107);
        $this->addReference('D107'$d107);

// Création de la salle D109
      $d109 = new Room();
      $d109->setName("D109");
      $d109->setNbComputer("1");
      $d109->setFacing("N");
        $manager->persis$d109);
        $this->addReference('D109'$d109);

// ------ 2eme étage --------
// INFORMATIQUE

// Création de la salle D201
      $d201 = new Room();
      $d201->setName("D201");
      $d201->setNbComputer("0");
      $d201->setFacing("N");
        $manager->persis$d201);
        $this->addReference('D201'$d201);

// Création de la salle D203
      $d203 = new Room();
      $d203->setName("D203");
      $d203->setNbComputer("2");
      $d203->setFacing("N");
        $manager->persis$d203);
        $this->addReference('D203'$d203);

// Création de la salle D205
      $d205 = new Room();
      $d205->setName("D205");
      $d205->setNbComputer("15");
      $d205->setFacing("N");
        $manager->persis$d205);
        $this->addReference('D205'$d205);

// Création de la salle D207
      $d207 = new Room();
      $d207->setName("D207");
      $d207->setNbComputer("15");
      $d207->setFacing("N");
        $manager->persis$d207);
        $this->addReference('D207'$d207);

// Création de la salle D204
      $d204 = new Room();
      $d204->setName("D204");
      $d204->setNbComputer("15");
      $d204->setFacing("S");
        $manager->persis$d204);
        $this->addReference('D204'$d204);

// Création de la salle D206
      $d206 = new Room();
      $d206->setName("D206");
      $d206->setNbComputer("15");
      $d206->setFacing("S");
        $manager->persis$d206);
        $this->addReference('D206'$d206);


// RESEAU ET TELECOM

// Création de la salle C205
        $c205 = new Room();
        $c205->setName("C205");
        $c205->setNbComputer("15");
        $c205->setFacing("N");
        $manager->persist($c205);
        $this->addReference('C205', $c205);


// Création de la salle C207
        $c207 = new Room();
        $c207->setName("C207");
        $c207->setNbComputer("15");
        $c207->setFacing("N");
        $manager->persist($c207);
        $this->addReference('C207', $c207);

// Création de la salle C204
        $c204 = new Room();
        $c204->setName("C204");
        $c204->setNbComputer("15");
        $c204->setFacing("S");
        $manager->persist($c204);
        $this->addReference('C204', $c204);

// Création de la salle C206
        $c206 = new Room();
        $c206->setName("C206");
        $c206->setNbComputer("15");
        $c206->setFacing("S");
        $manager->persist($c206);
        $this->addReference('C206', $c206);

// ------ 3eme étage --------

// Création de la salle D301
      $d301 = new Room();
      $d301->setName("D301");
      $d301->setNbComputer("15");
      $d301->setFacing("N");
        $manager->persis$d301);
        $this->addReference('D301'$d301);

// Création de la salle D303
      $d303 = new Room();
      $d303->setName("D303");
      $d303->setNbComputer("15");
      $d303->setFacing("N");
        $manager->persis$d303);
        $this->addReference('D303'$d303);

// Création de la salle D305
      $d305 = new Room();
      $d305->setName("D305");
      $d305->setNbComputer("15");
      $d305->setFacing("N");
        $manager->persis$d305);
        $this->addReference('D305'$d305);

// Création de la salle D307
      $d307 = new Room();
      $d307->setName("D307");
      $d307->setNbComputer("15");
      $d307->setFacing("N");
        $manager->persis$d307);
        $this->addReference('D307'$d307);

// Création de la salle D302
      $d302 = new Room();
      $d302->setName("D302");
      $d302->setNbComputer("15");
      $d302->setFacing("S");
        $manager->persis$d302);
        $this->addReference('D302'$d302);

// Création de la salle D304
      $d304 = new Room();
      $d304->setName("D304");
      $d304->setNbComputer("15");
      $d304->setFacing("S");
        $manager->persis$d304);
        $this->addReference('D304'$d304);

// Création de la salle D306
      $d306 = new Room();
      $d306->setName("D306");
      $d306->setNbComputer("15");
      $d306->setFacing("S");
        $manager->persis$d306);
        $this->addReference('D306'$d306);

// Création de la salle Secrétariat
        $Secret = new Room();
        $Secret->setName("Secrétariat");
        $Secret->setNbComputer("4");
        $Secret->setFacing("S");
        $manager->persist($Secret);
        $this->addReference('Secrétariat', $Secret);

// RESEAU ET TELECOM

// Création de la salle C302
        $c302 = new Room();
        $c302->setName("C302");
        $c302->setNbComputer("15");
        $c302->setFacing("S");
        $manager->persist($c302);
        $this->addReference('C302', $c302);

// Création de la salle C304
        $c304 = new Room();
        $c304->setName("C304");
        $c304->setNbComputer("15");
        $c304->setFacing("S");
        $manager->persist($c304);
        $this->addReference('C304', $c304);

// Création de la salle C306
        $c306 = new Room();
        $c306->setName("C306");
        $c306->setNbComputer("15");
        $c306->setFacing("S");
        $manager->persist($c306);
        $this->addReference('C306', $c306);

// Création de la salle C305
        $c305 = new Room();
        $c305->setName("C305");
        $c305->setNbComputer("15");
        $c305->setFacing("N");
        $manager->persist($c305);
        $this->addReference('C305', $c305);

// Création de la salle C307
        $c307 = new Room();
        $c307->setName("C307");
        $c307->setNbComputer("15");
        $c307->setFacing("N");
        $manager->persist($c307);
        $this->addReference('C307', $c307);


        // =============================== //
        //      Création des SA            //
        // =============================== //

        $sa1 = new SA();
        $sa1->setName("ESP-001");
        $sa1->setState("ACTIF");
        $sa1->setCurrentRoom($this->getReference('D205'));
        $this->addReference('sa1', $sa1);
        $manager->persist($sa1);

        // SA 2
        $sa2 = new SA();
        $sa2->setName("ESP-002");
        $sa2->setState("ACTIF");
        $sa2->setCurrentRoom($this->getReference('D206'));
        $this->addReference('sa2', $sa2);
        $manager->persist($sa2);

        // SA 3
        $sa3 = new SA();
        $sa3->setName("ESP-003");
        $sa3->setState("ACTIF");
        $sa3->setCurrentRoom($this->getReference('D207'));
        $this->addReference('sa3', $sa3);
        $manager->persist($sa3);

        // SA 4
        $sa4 = new SA();
        $sa4->setName("ESP-004");
        $sa4->setState("ACTIF");
        $sa4->setCurrentRoom($this->getReference('D204'));
        $this->addReference('sa4', $sa4);
        $manager->persist($sa4);

        // SA 5
        $sa5 = new SA();
        $sa5->setName("ESP-005");
        $sa5->setState("ACTIF");
        $sa5->setCurrentRoom($this->getReference('D203'));
        $this->addReference('sa5', $sa5);
        $manager->persist($sa5);

        // SA 6
        $sa6 = new SA();
        $sa6->setName("ESP-006");
        $sa6->setState("ACTIF");
        $sa6->setCurrentRoom($this->getReference('D303'));
        $this->addReference('sa6', $sa6);
        $manager->persist($sa6);

        // SA 7
        $sa7 = new SA();
        $sa7->setName("ESP-007");
        $sa7->setState("ACTIF");
        $sa7->setCurrentRoom($this->getReference('D304'));
        $this->addReference('sa7', $sa7);
        $manager->persist($sa7);

        // SA 8
        $sa8 = new SA();
        $sa8->setName("ESP-008");
        $sa8->setState("ACTIF");
        $sa8->setCurrentRoom($this->getReference('C101'));
        $this->addReference('sa8', $sa8);
        $manager->persist($sa8);

        // SA 9
        $sa9 = new SA();
        $sa9->setName("ESP-009");
        $sa9->setState("ACTIF");
        $sa9->setCurrentRoom($this->getReference('D109'));
        $this->addReference('sa9', $sa9);
        $manager->persist($sa9);

        // SA 10
        $sa10 = new SA();
        $sa10->setName("ESP-010");
        $sa10->setState("ACTIF");
        $sa10->setCurrentRoom($this->getReference('Secrétariat'));
        $this->addReference('sa10', $sa10);
        $manager->persist($sa10);

        // SA 11
        $sa11 = new SA();
        $sa11->setName("ESP-011");
        $sa11->setState("ACTIF");
        $sa11->setCurrentRoom($this->getReference('D001'));
        $this->addReference('sa11', $sa11);
        $manager->persist($sa11);

        // SA 12
        $sa12 = new SA();
        $sa12->setName("ESP-012");
        $sa12->setState("ACTIF");
        $sa12->setCurrentRoom($this->getReference('D002'));
        $this->addReference('sa12', $sa12);
        $manager->persist($sa12);

        // SA 13
        $sa13 = new SA();
        $sa13->setName("ESP-013");
        $sa13->setState("ACTIF");
        $sa13->setCurrentRoom($this->getReference('D004'));
        $this->addReference('sa13', $sa13);
        $manager->persist($sa13);

        // SA 14
        $sa14 = new SA();
        $sa14->setName("ESP-014");
        $sa14->setState("ACTIF");
        $sa14->setCurrentRoom($this->getReference('C004'));
        $this->addReference('sa14', $sa14);
        $manager->persist($sa14);

        // SA 15
        $sa15 = new SA();
        $sa15->setName("ESP-015");
        $sa15->setState("ACTIF");
        $sa15->setCurrentRoom($this->getReference('C007'));
        $this->addReference('sa15', $sa15);
        $manager->persist($sa15);

        // SA 16
        $sa16 = new SA();
        $sa16->setName("ESP-016");
        $sa16->setState("ACTIF");
        $sa16->setCurrentRoom($this->getReference('D201'));
        $this->addReference('sa16', $sa16);
        $manager->persist($sa16);

        // SA 17
        $sa17 = new SA();
        $sa17->setName("ESP-017");
        $sa17->setState("ACTIF");
        $sa17->setCurrentRoom($this->getReference('D307'));
        $this->addReference('sa17', $sa17);
        $manager->persist($sa17);

        // SA 18
        $sa18 = new SA();
        $sa18->setName("ESP-018");
        $sa18->setState("ACTIF");
        $sa18->setCurrentRoom($this->getReference('C005'));
        $this->addReference('sa18', $sa18);
        $manager->persist($sa18);

        // =============================== //
        // Création des salles d'exemples  //
        // =============================== //

// Création de la salle test1
        $test1 = new Room();
        $test1->setName("test1");
        $test1->setNbComputer("15");
        $test1->setFacing("N");
        $manager->persist($test1);
        $this->addReference('test1', $test1);

// Création de la salle test2
        $test2 = new Room();
        $test2->setName("test2");
        $test2->setNbComputer("15");
        $test2->setFacing("N");
        $manager->persist($test2);
        $this->addReference('test2', $test2);

        // Création de la salle test3
        $test3 = new Room();
        $test3->setName("test3");
        $test3->setNbComputer("15");
        $test3->setFacing("N");
        $manager->persist($test3);
        $this->addReference('test3', $test3);

        // Création de la salle test4
        $test4 = new Room();
        $test4->setName("test4");
        $test4->setNbComputer("15");
        $test4->setFacing("N");
        $manager->persist($test4);
        $this->addReference('test4', $test4);

        // Création de la salle test5
        $test5 = new Room();
        $test5->setName("test5");
        $test5->setNbComputer("15");
        $test5->setFacing("N");
        $manager->persist($test5);
        $this->addReference('test5', $test5);

        // Création de la salle test6
        $test6 = new Room();
        $test6->setName("test6");
        $test6->setNbComputer("15");
        $test6->setFacing("N");
        $manager->persist($test6);
        $this->addReference('test6', $test6);

        // Création de la salle test7
        $test7 = new Room();
        $test7->setName("test7");
        $test7->setNbComputer("15");
        $test7->setFacing("N");
        $manager->persist($test7);
        $this->addReference('test7', $test7);

        // Création de la salle test8
        $test8 = new Room();
        $test8->setName("test8");
        $test8->setNbComputer("15");
        $test8->setFacing("N");
        $manager->persist($test8);
        $this->addReference('test8', $test8);

        // Création de la salle test9
        $test9 = new Room();
        $test9->setName("test9");
        $test9->setNbComputer("15");
        $test9->setFacing("N");
        $manager->persist($test9);
        $this->addReference('test9', $test9);

        // Création de la salle test10
        $test10 = new Room();
        $test10->setName("test10");
        $test10->setNbComputer("15");
        $test10->setFacing("N");
        $manager->persist($test10);
        $this->addReference('test10', $test10);

        // Création de la salle test11
        $test11 = new Room();
        $test11->setName("test11");
        $test11->setNbComputer("15");
        $test11->setFacing("N");
        $manager->persist($test11);
        $this->addReference('test11', $test11);

        // Création de la salle test12
        $test12 = new Room();
        $test12->setName("test12");
        $test12->setNbComputer("15");
        $test12->setFacing("N");
        $manager->persist($test12);
        $this->addReference('test12', $test12);

        // Création de la salle test13
        $test13 = new Room();
        $test13->setName("test13");
        $test13->setNbComputer("15");
        $test13->setFacing("N");
        $manager->persist($test13);
        $this->addReference('test13', $test13);

        // Création de la salle test14
        $test14 = new Room();
        $test14->setName("test14");
        $test14->setNbComputer("15");
        $test14->setFacing("N");
        $manager->persist($test14);
        $this->addReference('test14', $test14);

        // Création de la salle test15
        $test15 = new Room();
        $test15->setName("test15");
        $test15->setNbComputer("15");
        $test15->setFacing("N");
        $manager->persist($test15);
        $this->addReference('test15', $test15);

        // =============================== //
        //   Création des SA d'exemples    //
        // =============================== //

        // SA ex1
        $saex1 = new SA();
        $saex1->setName("SA01");
        $saex1->setState("ACTIF");
        $saex1->setCurrentRoom($this->getReference('test1'));
        $this->addReference('saex1', $saex1);
        $manager->persist($saex1);

        // SA ex2
        $saex2 = new SA();
        $saex2->setName("SA02");
        $saex2->setState("ACTIF");
        $saex2->setCurrentRoom($this->getReference('test2'));
        $this->addReference('saex2', $saex2);
        $manager->persist($saex2);

        // SA ex3
        $saex3 = new SA();
        $saex3->setName("SA03");
        $saex3->setState("A_INSTALLER");
        $saex3->setCurrentRoom($this->getReference('test4'));
        $saex3->setOldRoom($this->getReference('test3'));
        $this->addReference('saex3', $saex3);
        $manager->persist($saex3);

        // SA ex4
        $saex4 = new SA();
        $saex4->setName("SA04");
        $saex4->setState("A_INSTALLER");
        $saex4->setCurrentRoom($this->getReference('test5'));
        $this->addReference('saex4', $saex4);
        $manager->persist($saex4);

        // SA ex5
        $saex5 = new SA();
        $saex5->setName("SA05");
        $saex5->setState("MAINTENANCE");
        $saex5->setCurrentRoom($this->getReference('test6'));
        $this->addReference('saex5', $saex5);
        $manager->persist($saex5);

        // SA ex6
        $saex6 = new SA();
        $saex6->setName("SA06");
        $saex6->setState("MAINTENANCE");
        $saex6->setCurrentRoom($this->getReference('test7'));
        $this->addReference('saex6', $saex6);
        $manager->persist($saex6);

        // SA ex7
        $saex7 = new SA();
        $saex7->setName("SA07");
        $saex7->setState("INACTIF");
        $this->addReference('saex7', $saex7);
        $manager->persist($saex7);

        // SA ex8
        $saex8 = new SA();
        $saex8->setName("SA08");
        $saex8->setState("INACTIF");
        $this->addReference('saex8', $saex8);
        $manager->persist($saex8);

        // ===================================== //
        // Création des Interventions d'exemples //
        // ===================================== //

        //Interventions Installation sur SAex1
        $inst1 = new Intervention();
        $inst1->setState("FINIE");
        $inst1->setSa($this->getReference('saex1'));
        $inst1->setType("INSTALLATION");
        $inst1->setMessage("Installation du SA1 en test1");
        $inst1->setReport("Installation effectué sans probleme");
        $inst1->setStartingDate(new \DateTimeImmutable());
        $inst1->setEndingDate(new \DateTimeImmutable());
        $inst1->setTech($this->getReference('tech1'));
        $manager->persist($inst1);

        //Interventions Installation sur SAex2
        $inst2 = new Intervention();
        $inst2->setState("FINIE");
        $inst2->setSa($this->getReference('saex2'));
        $inst2->setType("INSTALLATION");
        $inst2->setMessage("Installation du SA2 en test2");
        $inst2->setReport("Installation effectué sans probleme");
        $inst2->setStartingDate(new \DateTimeImmutable());
        $inst2->setEndingDate(new \DateTimeImmutable());
        $inst2->setTech($this->getReference('tech1'));
        $manager->persist($inst2);

        // Intervention Installation sur SAex3
        $inst3 = new Intervention();
        $inst3->setState("EN_COURS");
        $inst3->setSa($this->getReference('saex3'));
        $inst3->setMessage("Changement du SA3 de la salle test3 à la test4");
        $inst3->setStartingDate(new \DateTimeImmutable());
        $inst3->setType('INSTALLATION');
        $manager->persist($inst3);

        //Intervention Installation sur SAex4
        $inst4 = new Intervention();
        $inst4->setState("EN_COURS");
        $inst4->setSa($this->getReference('saex4'));
        $inst4->setMessage("Installation du SA4 dans la salle test5");
        $inst4->setStartingDate(new \DateTimeImmutable());
        $inst4->setType("INSTALLATION");
        $inst4->setTech($this->getReference('tech1'));
        $manager->persist($inst4);

        // Intervention Maintenance sur SAex5
        $maint1 = new Intervention();
        $maint1->setState("EN_COURS");
        $maint1->setSa($this->getReference('saex5'));
        $maint1->setMessage("Le capteur de CO2 ne remonte plus de données, verifier le capteur et les branchements");
        $maint1->setStartingDate(new \DateTimeImmutable());
        $maint1->setType('MAINTENANCE');
        $manager->persist($maint1);

        //Intervention Maintenance sur SAex6
        $maint2 = new Intervention();
        $maint2->setState("EN_COURS");
        $maint2->setSa($this->getReference('saex6'));
        $maint2->setMessage("Le capteur d'humidité/température retourne des valeurs anormalement élevé, verifier le capteur et les branchements");
        $maint2->setStartingDate(new \DateTimeImmutable());
        $maint2->setType("MAINTENANCE");
        $maint2->setTech($this->getReference('tech1'));
        $manager->persist($maint2);

        //Intervention Maintenance sur SAex2
        $maint3 = new Intervention();
        $maint3->setState("ANNULEE");
        $maint3->setSa($this->getReference('saex2'));
        $maint3->setType("MAINTENANCE");
        $maint3->setMessage("Les données du sa presentent d'enorment incoherences. Il faut verifier les connectiques capteurs.");
        $maint3->setReport("Impossible de trouver d'ou vienne les incoherences. Retour du SA au depot.");
        $maint3->setStartingDate(new \DateTimeImmutable());
        $maint3->setEndingDate(new \DateTimeImmutable());
        $maint3->setTech($this->getReference('tech1'));
        $manager->persist($maint3);

        $manager->flush();

    }
}
