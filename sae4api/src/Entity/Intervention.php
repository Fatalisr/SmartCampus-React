<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use App\Controller\GetOnlyCurrentInterventionsController;
use App\Repository\InterventionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use phpDocumentor\Reflection\DocBlock\Description;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InterventionRepository::class)]
#[ApiResource(
    operations: [
        new GetCollection(
            controller: GetOnlyCurrentInterventionsController::class,
            description: "Retourne toute les interventions dont l'état est en cours",
            normalizationContext: ['groups' =>['intervention:read']],
        ),
        new Get(
            description: "Retourne une intervention selon son id",
            normalizationContext: ['groups' =>['intervention:item:read']]
        ),
        new Patch(
            uriTemplate: '/intervention/setTechnician/{id}',
            description: "Permet la modification du technicien affilié a l'intervention",
            normalizationContext: ['groups' => ['intervention:patch:tech']]
        ),
        new Patch(
            uriTemplate: '/intervention/setEndIntervention/{id}',
            description: "Permet le passage d'une intervention a l'état de fin (passage du state a 'FINI', set de l'endingDate et du report)",
            normalizationContext: ['groups' => ['intervention:patch:end']]
        )
    ]
)]

class Intervention
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['intervention:read','intervention:item:read'])]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeInterface $startingDate = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE, nullable: true)]
    #[Groups(['intervention:patch:end'])]
    private ?\DateTimeInterface $endingDate = null;

    #[ORM\Column(length: 500, nullable: true)]
    #[Groups(['intervention:item:read'])]
    private ?string $message = null;

    #[ORM\Column(length: 500, nullable: true)]
    #[Groups(['intervention:patch:end'])]
    private ?string $report = null;

    #[ORM\Column(length: 15, options: ['check' => "check (type in ('INSTALLATION','MAINTENANCE'))"])]
    #[Groups(['intervention:read','intervention:item:read'])]
    private ?string $type = null;

    #[ORM\Column(length: 15, options: ['check' => "check (state in ('EN_COURS','FINIE','ANNULEE'))"])]
    #[Groups(['intervention:read','intervention:patch:end'])]
    private ?string $state = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['intervention:read','intervention:item:read'])]
    private ?SA $sa = null;

    #[ORM\ManyToOne]
    #[Groups(['intervention:read','intervention:item:read','intervention:patch:tech'])]
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
