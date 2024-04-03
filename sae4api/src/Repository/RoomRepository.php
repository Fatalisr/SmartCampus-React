<?php

namespace App\Repository;

use App\Entity\Room;
use App\Entity\SA;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ManagerRegistry;
use function PHPUnit\Framework\assertClassHasAttribute;

/**
 * @extends ServiceEntityRepository<Room>
 *
 * @method Room|null find($id, $lockMode = null, $lockVersion = null)
 * @method Room|null findOneBy(array $criteria, array $orderBy = null)
 * @method Room[]    findAll()
 * @method Room[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RoomRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Room::class);
    }

    public function getRoomWithSA():array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(SA::class, 'sa')
            ->andWhere( 'r.id = sa.currentRoom')
            ->orderBy('r.name', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
