<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\RoomRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\GetOnlyRoomsWithSAController;

#[ORM\Entity(repositoryClass: RoomRepository::class)]
#[ApiResource(
    operations: [
        new GetCollection(
            controller: GetOnlyRoomsWithSAController::class,
            description: "Retourne toute les salles ayant un SA",
            normalizationContext: ['groups' =>['room:read']],
        ),
        new Get(
            description: "Retourne les infos de la salle",
            normalizationContext: ['groups' =>['room:item:read']],
        )
    ]
)]
class Room
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['room:read','room:item:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 15)]
    #[Groups(['intervention:item:read','intervention:read','room:read','room:item:read'])]
    private ?string $name = null;

    #[ORM\Column]
    private ?int $nbComputer = null;

    #[ORM\Column(length: 1, options: ['check' => "check (facing in ('N','S','E','W'))"])]
    #[Groups(['room:item:read'])]
    private ?string $facing = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getNbComputer(): ?int
    {
        return $this->nbComputer;
    }

    public function setNbComputer(int $nbComputer): static
    {
        $this->nbComputer = $nbComputer;

        return $this;
    }

    public function getFacing(): ?string
    {
        return $this->facing;
    }

    public function setFacing(string $facing): static
    {
        $this->facing = $facing;

        return $this;
    }
}
