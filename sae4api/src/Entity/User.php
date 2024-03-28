<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;


#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource (
    description: 'Ressource User et ses requêtes GET(id) et GET(*)',
    operations: [
        new Get(
            normalizationContext: ['groups' => 'users:read']
        ),
        new GetCollection(
            normalizationContext: ['groups' => 'users:read']
        )
    ],
    normalizationContext: ['groups' => 'users:read']
)]

class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['intervention:read','intervention:item:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 15)]
    #[Groups(['users:read','intervention:read','intervention:item:read'])]
    private ?string $username = null;

    #[ORM\Column(length: 255)]
    #[Groups(['users:read'])]
    private ?string $password = null;

    #[ORM\Column(length: 20, options: ['check' => "check (role in ('PERSONNEL','TECHNICIEN'))"])]
    #[Groups(['users:read'])]
    private ?string $role = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): static
    {
        $this->role = $role;

        return $this;
    }

}
