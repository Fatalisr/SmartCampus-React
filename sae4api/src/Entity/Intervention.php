<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\InterventionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InterventionRepository::class)]
#[ApiResource]
class Intervention
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeInterface $startingDate = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE, nullable: true)]
    private ?\DateTimeInterface $endingDate = null;

    #[ORM\Column(length: 500, nullable: true)]
    private ?string $message = null;

    #[ORM\Column(length: 500, nullable: true)]
    private ?string $report = null;

    #[ORM\Column(length: 15, options: ['check' => "check (type in ('INSTALLATION','MAINTENANCE'))"])]
    private ?string $type = null;

    #[ORM\Column(length: 15, options: ['check' => "check (state in ('EN_COURS','FINIE','ANNULEE'))"])]
    private ?string $state = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?SA $sa = null;

    #[ORM\ManyToOne]
    private ?User $tech = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStartingDate(): ?\DateTimeInterface
    {
        return $this->startingDate;
    }

    public function setStartingDate(\DateTimeInterface $startingDate): static
    {
        $this->startingDate = $startingDate;

        return $this;
    }

    public function getEndingDate(): ?\DateTimeInterface
    {
        return $this->endingDate;
    }

    public function setEndingDate(?\DateTimeInterface $endingDate): static
    {
        $this->endingDate = $endingDate;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): static
    {
        $this->message = $message;

        return $this;
    }

    public function getReport(): ?string
    {
        return $this->report;
    }

    public function setReport(?string $report): static
    {
        $this->report = $report;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getState(): ?string
    {
        return $this->state;
    }

    public function setState(string $state): static
    {
        $this->state = $state;

        return $this;
    }

    public function getSa(): ?SA
    {
        return $this->sa;
    }

    public function setSa(?SA $sa): static
    {
        $this->sa = $sa;

        return $this;
    }

    public function getTech(): ?User
    {
        return $this->tech;
    }

    public function setTech(?User $tech): static
    {
        $this->tech = $tech;

        return $this;
    }
}
